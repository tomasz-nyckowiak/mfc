<?php

namespace App\Form;

use App\Entity\TitleInformation;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\Type;

class TitleInformationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('rating', IntegerType::class)
            ->add('toWatch', CheckboxType::class)
            ->add('review', TextareaType::class)
            ->add('originalTitle', CollectionType::class, [
                'entry_type' => TextType::class,
                'entry_options' => [
                    'attr' => ['class' => 'text-black-700']
                ]
            ])
            ->add('titleType')
            ->add('genres')
            ->add('stars')
            ->add('releaseDate')            
            ->add('ImdbRating')
            ->add('runtime')
            ->add('director')
            ->add('creator')
            ->add('writer')
            ->add('plot')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => TitleInformation::class,
        ]);
    }
}
