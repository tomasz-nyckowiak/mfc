<?php

namespace App\Form;

use App\Entity\TitleInformation;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Type;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;

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

            // ->add('img', FileType::class, [
            //     'mapped' => false,
            //     'required' => false,
            //     'constraints' => [
            //         new Image([
            //             'maxSize' => '5120k',
            //             'maxSizeMessage' => 'Image is too large! Allowed maximum size is 1024 kB',
            //             'mimeTypes' => ['image/jpeg','image/png'],
            //             'mimeTypesMessage' => 'Please upload a valid jpeg/png file',
            //         ])
            //     ]
            // ])

            // ->add('genres')
            // ->add('stars')
            // ->add('releaseDate')            
            // ->add('ImdbRating')
            // ->add('runtime')
            // ->add('director')
            // ->add('creator')
            // ->add('writer')
            // ->add('plot')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => TitleInformation::class,
        ]);
    }
}
