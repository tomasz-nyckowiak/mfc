<?php

namespace App\Repository;

use App\Entity\TitleInformation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

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
