<?php

namespace App\Security;

use DateTime;
use App\Entity\User;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserCheckerInterface;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAccountStatusException;

class UserChecker implements UserCheckerInterface
{
  /**
   * @param User $user
   */
  public function checkPreAuth(UserInterface $user): void
  {
    if (null === $user->getBannedUntil()) {
      return;
    }

    $now = new DateTime();

    if ($now < $user->getBannedUntil()) {
      throw new AccessDeniedHttpException('The user is banned');
    }
  }

  /**
   * @param User $user
   */
  public function checkPostAuth(UserInterface $user): void
  {
    // if (!$user->isVerified()) {  
    //   throw new CustomUserMessageAccountStatusException('Your account was not activated yet! Please confirm your email!');
    // }
  }
}