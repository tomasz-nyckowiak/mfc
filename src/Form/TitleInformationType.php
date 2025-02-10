<?php

namespace App\Form;

use App\Entity\TitleInformation;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class TitleInformationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('originalTitle', TextType::class, [
                'constraints' => [
                    new NotBlank([
                        'message' => 'Title is required!',
                    ]),
                ]
            ])
            ->add('titleType', ChoiceType::class, [
                'placeholder' => 'Title type',
                'choices' => [
                    'Movie' => 'Movie',
                    'Music Video' => 'Music Video',
                    'Podcast Episode' => 'Podcast Episode'
                ]
            ])            
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => TitleInformation::class,
        ]);
    }
}
