<?php

namespace App\Entity;

use App\Repository\TitleInformationRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TitleInformationRepository::class)]
class TitleInformation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\Column(length: 100)]
    private ?string $originalTitle = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $titleType = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $genres = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $stars = null;

    #[ORM\Column(type: Types::SMALLINT, nullable: true)]
    private ?int $releaseDate = null;

    #[ORM\Column(nullable: true)]
    private ?float $rating = null;

    #[ORM\Column(nullable: true)]
    private ?float $ImdbRating = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $runtime = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $director = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $creator = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $writer = null;

    #[ORM\Column(length: 1024, nullable: true)]
    private ?string $plot = null;

    #[ORM\Column(length: 150, nullable: true)]
    private ?string $imageUrl = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $review = null;

    #[ORM\Column(nullable: true)]
    private ?bool $toWatch = null;

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

    public function getOriginalTitle(): ?string
    {
        return $this->originalTitle;
    }

    public function setOriginalTitle(string $originalTitle): static
    {
        $this->originalTitle = $originalTitle;

        return $this;
    }

    public function getTitleType(): ?string
    {
        return $this->titleType;
    }

    public function setTitleType(?string $titleType): static
    {
        $this->titleType = $titleType;

        return $this;
    }

    public function getGenres(): ?string
    {
        return $this->genres;
    }

    public function setGenres(?string $genres): static
    {
        $this->genres = $genres;

        return $this;
    }

    public function getStars(): ?string
    {
        return $this->stars;
    }

    public function setStars(?string $stars): static
    {
        $this->stars = $stars;

        return $this;
    }

    public function getReleaseDate(): ?int
    {
        return $this->releaseDate;
    }

    public function setReleaseDate(?int $releaseDate): static
    {
        $this->releaseDate = $releaseDate;

        return $this;
    }

    public function getRating(): ?float
    {
        return $this->rating;
    }

    public function setRating(?float $rating): static
    {
        $this->rating = $rating;

        return $this;
    }

    public function getImdbRating(): ?float
    {
        return $this->ImdbRating;
    }

    public function setImdbRating(?float $ImdbRating): static
    {
        $this->ImdbRating = $ImdbRating;

        return $this;
    }

    public function getRuntime(): ?string
    {
        return $this->runtime;
    }

    public function setRuntime(?string $runtime): static
    {
        $this->runtime = $runtime;

        return $this;
    }

    public function getDirector(): ?string
    {
        return $this->director;
    }

    public function setDirector(?string $director): static
    {
        $this->director = $director;

        return $this;
    }

    public function getCreator(): ?string
    {
        return $this->creator;
    }

    public function setCreator(?string $creator): static
    {
        $this->creator = $creator;

        return $this;
    }

    public function getWriter(): ?string
    {
        return $this->writer;
    }

    public function setWriter(?string $writer): static
    {
        $this->writer = $writer;

        return $this;
    }

    public function getPlot(): ?string
    {
        return $this->plot;
    }

    public function setPlot(?string $plot): static
    {
        $this->plot = $plot;

        return $this;
    }

    public function getImageUrl(): ?string
    {
        return $this->imageUrl;
    }

    public function setImageUrl(?string $imageUrl): static
    {
        $this->imageUrl = $imageUrl;

        return $this;
    }

    public function getReview(): ?string
    {
        return $this->review;
    }

    public function setReview(?string $review): static
    {
        $this->review = $review;

        return $this;
    }

    public function isToWatch(): ?bool
    {
        return $this->toWatch;
    }

    public function setToWatch(?bool $toWatch): static
    {
        $this->toWatch = $toWatch;

        return $this;
    }
}
