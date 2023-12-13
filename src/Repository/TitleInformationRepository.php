<?php

namespace App\Repository;

use App\Entity\TitleInformation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use mysqli;
use Symfony\Component\VarDumper\Caster\MysqliCaster;

/**
 * @extends ServiceEntityRepository<TitleInformation>
 *
 * @method TitleInformation|null find($id, $lockMode = null, $lockVersion = null)
 * @method TitleInformation|null findOneBy(array $criteria, array $orderBy = null)
 * @method TitleInformation[]    findAll()
 * @method TitleInformation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TitleInformationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TitleInformation::class);
    }

    public function add(TitleInformation $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(TitleInformation $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function checkIfTitleAlreadyExistInLibraryForCurrentUser(int $userId, string $title)
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = "
            SELECT original_title FROM title_information
            WHERE title_information.original_title = '$title'
            AND title_information.user_id = '$userId'
        ";
        
        $resultSet = $conn->executeQuery($sql);
        
        return $resultSet->fetchOne();
    }

    public function addToLibrary(int $id, $ratingValue, $review, $toWatch)
    {
        $conn = $this->getEntityManager()->getConnection();

        if (str_contains($ratingValue, ',')) {
            $rating = str_replace(",", ".", $ratingValue);
        } else $rating = $ratingValue;
        
        $review = addslashes($review);

        //ALL 3 NOT EMPTY
        if (!empty($rating) && !empty($review) && !empty($toWatch)) {
            $sql = "
                UPDATE title_information
                SET rating = '$rating', review = '$review', to_watch = '$toWatch'
                WHERE id = '$id'
            ";
        }
        
        //1 EMPTY VALUE
        if (empty($rating) && !empty($review) && !empty($toWatch)) {
            $sql = "
                UPDATE title_information
                SET rating = NULL, review = '$review', to_watch = '$toWatch'
                WHERE id = '$id'
            ";
        }

        if (!empty($rating) && empty($review) && !empty($toWatch)) {
            $sql = "
                UPDATE title_information
                SET rating = '$rating', review = NULL, to_watch = '$toWatch'
                WHERE id = '$id'
            ";
        }

        if (!empty($rating) && !empty($review) && empty($toWatch)) {
            $sql = "
                UPDATE title_information
                SET rating = '$rating', review = '$review', to_watch = NULL
                WHERE id = '$id'
            ";
        }

        //2 EMPTY VALUES
        if (!empty($rating) && empty($review) && empty($toWatch)) {
            $sql = "
                UPDATE title_information
                SET rating = '$rating', review = NULL, to_watch = NULL
                WHERE id = '$id'
            ";
        }

        if (empty($rating) && !empty($review) && empty($toWatch)) {
            $sql = "
                UPDATE title_information
                SET rating = NULL, review = '$review', to_watch = NULL
                WHERE id = '$id'
            ";
        }

        if (empty($rating) && empty($review) && !empty($toWatch)) {
            $sql = "
                UPDATE title_information
                SET rating = NULL, review = NULL, to_watch = '$toWatch'
                WHERE id = '$id'
            ";
        }
        
        //ALL 3 ARE EMPTY
        if (empty($rating) && empty($review) && empty($toWatch)) {
            $sql = "
                UPDATE title_information
                SET rating = NULL, review = NULL, to_watch = NULL
                WHERE id = '$id'
            ";
        }        
        
        $resultSet = $conn->executeQuery($sql);
            
        return $resultSet->fetchOne();
    }

    public function findAllOtherThanMovieAndTvSeries(int $id): array
    {
        $qb = $this->createQueryBuilder('p')
            ->andWhere('p.titleType != :titleType1')
            ->andWhere('p.titleType != :titleType2')
            ->setParameter('titleType1', 'Movie')
            ->setParameter('titleType2', 'Tv Series')
            ->setParameter('userId', $id)           
        ;

        $qb->andWhere('p.user = :userId');

        $query = $qb->getQuery();

        return $query->execute();
    }

//    /**
//     * @return TitleInformation[] Returns an array of TitleInformation objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('t.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?TitleInformation
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
