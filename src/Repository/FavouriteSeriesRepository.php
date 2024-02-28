<?php

namespace App\Repository;

use App\Entity\FavouriteSeries;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FavouriteSeries>
 *
 * @method FavouriteSeries|null find($id, $lockMode = null, $lockVersion = null)
 * @method FavouriteSeries|null findOneBy(array $criteria, array $orderBy = null)
 * @method FavouriteSeries[]    findAll()
 * @method FavouriteSeries[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FavouriteSeriesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FavouriteSeries::class);
    }

    public function createList(FavouriteSeries $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(FavouriteSeries $entity, bool $flush = false): void
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
            SELECT EXISTS(SELECT * FROM favourite_series
            WHERE favourite_series.user_id = '$userId')
        ";
        
        $resultSet = $conn->executeQuery($sql);
        
        return $resultSet->fetchOne();
    }

    public function gettingTop5(int $userId): array
    {
        return $this->createQueryBuilder('s')
            ->select('s.first', 's.second', 's.third', 's.fourth', 's.fifth', 's.typeOfList')
            ->andWhere('s.user = :userId')            
            ->setParameter('userId', $userId)            
            ->getQuery()
            ->getSingleResult()
        ;
    }

    public function getTop5SeriesListId(int $userId)
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = "
            SELECT id FROM favourite_series
            WHERE favourite_series.user_id = '$userId'
        ";
        
        $resultSet = $conn->executeQuery($sql);
        
        return $resultSet->fetchOne();
    }

    public function updateTvSeriesListAfterRemovingTitleFromTheLibrary(int $listId, string $column): void
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = "
            UPDATE favourite_series
            SET $column = ''
            WHERE id = '$listId'
        ";
        
        $conn->executeQuery($sql);
    }

//    /**
//     * @return FavouriteSeries[] Returns an array of FavouriteSeries objects
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

//    public function findOneBySomeField($value): ?FavouriteSeries
//    {
//        return $this->createQueryBuilder('f')
//            ->andWhere('f.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
