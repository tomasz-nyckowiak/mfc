<?php

namespace App\Entity;

use App\Repository\FavouriteMoviesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FavouriteMoviesRepository::class)]
class FavouriteMovies
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $first = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $second = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $third = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $fourth = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $fifth = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $sixth = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $seventh = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $eighth = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $ninth = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $tenth = null;

    #[ORM\Column(length: 25)]
    private ?string $typeOfList = null;   

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getFirst(): ?string
    {
        return $this->first;
    }

    public function setFirst(?string $first): static
    {
        $this->first = $first;

        return $this;
    }

    public function getSecond(): ?string
    {
        return $this->second;
    }

    public function setSecond(?string $second): static
    {
        $this->second = $second;

        return $this;
    }

    public function getThird(): ?string
    {
        return $this->third;
    }

    public function setThird(?string $third): static
    {
        $this->third = $third;

        return $this;
    }

    public function getFourth(): ?string
    {
        return $this->fourth;
    }

    public function setFourth(?string $fourth): static
    {
        $this->fourth = $fourth;

        return $this;
    }

    public function getFifth(): ?string
    {
        return $this->fifth;
    }

    public function setFifth(?string $fifth): static
    {
        $this->fifth = $fifth;

        return $this;
    }

    public function getSixth(): ?string
    {
        return $this->sixth;
    }

    public function setSixth(?string $sixth): static
    {
        $this->sixth = $sixth;

        return $this;
    }

    public function getSeventh(): ?string
    {
        return $this->seventh;
    }

    public function setSeventh(?string $seventh): static
    {
        $this->seventh = $seventh;

        return $this;
    }

    public function getEighth(): ?string
    {
        return $this->eighth;
    }

    public function setEighth(?string $eighth): static
    {
        $this->eighth = $eighth;

        return $this;
    }

    public function getNinth(): ?string
    {
        return $this->ninth;
    }

    public function setNinth(?string $ninth): static
    {
        $this->ninth = $ninth;

        return $this;
    }

    public function getTenth(): ?string
    {
        return $this->tenth;
    }

    public function setTenth(?string $tenth): static
    {
        $this->tenth = $tenth;

        return $this;
    }

    public function getTypeOfList(): ?string
    {
        return $this->typeOfList;
    }

    public function setTypeOfList(string $typeOfList): static
    {
        $this->typeOfList = $typeOfList;

        return $this;
    }   
}
