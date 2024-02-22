<?php

namespace App\Entity;

use App\Repository\FavouriteSeriesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FavouriteSeriesRepository::class)]
class FavouriteSeries
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
