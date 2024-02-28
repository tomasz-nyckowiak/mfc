<?php

namespace App\Repository;

use App\Entity\FavouriteMovies;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FavouriteMovies>
 *
 * @method FavouriteMovies|null find($id, $lockMode = null, $lockVersion = null)
 * @method FavouriteMovies|null findOneBy(array $criteria, array $orderBy = null)
 * @method FavouriteMovies[]    findAll()
 * @method FavouriteMovies[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FavouriteMoviesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FavouriteMovies::class);
    }

    public function createList(FavouriteMovies $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(FavouriteMovies $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function checkIfRecordAlreadyExists(int $userId)
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = "
            SELECT EXISTS(SELECT * FROM favourite_movies
            WHERE favourite_movies.user_id = '$userId')
        ";
        
        $resultSet = $conn->executeQuery($sql);
        
        return $resultSet->fetchOne();
    }

    public function getTop10MoviesListId(int $userId)
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = "
            SELECT id FROM favourite_movies
            WHERE favourite_movies.user_id = '$userId'
        ";
        
        $resultSet = $conn->executeQuery($sql);
        
        return $resultSet->fetchOne();
    }

    public function updateMovieListAfterRemovingTitleFromTheLibrary(int $listId, string $column): void
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = "
            UPDATE favourite_movies
            SET $column = ''
            WHERE id = '$listId'
        ";
        
        $conn->executeQuery($sql);
    }

    public function gettingTop10(int $userId): array
    {
        return $this->createQueryBuilder('f')
            ->select('f.first', 'f.second', 'f.third', 'f.fourth', 'f.fifth', 'f.sixth', 'f.seventh', 'f.eighth',
            'f.ninth', 'f.tenth', 'f.typeOfList')
            ->andWhere('f.user = :userId')            
            ->setParameter('userId', $userId)            
            ->getQuery()
            ->getSingleResult()
        ;
    }

//    /**
//     * @return FavouriteMovies[] Returns an array of FavouriteMovies objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('f.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?FavouriteMovies
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
