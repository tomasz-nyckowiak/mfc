<?php

namespace App\Form;

use App\Entity\TitleInformation;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TitleInformationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('originalTitle')
            ->add('titleType')
            ->add('genres')
            ->add('stars')
            ->add('releaseDate')
            ->add('rating')
            ->add('ImdbRating')
            ->add('runtime')
            ->add('director')
            ->add('creator')
            ->add('writer')
            ->add('plot')
            ->add('imageUrl')
            ->add('review')
            ->add('toWatch')
            ->add('user')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => TitleInformation::class,
        ]);
    }
}
