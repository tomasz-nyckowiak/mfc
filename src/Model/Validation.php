<?php

namespace App\Model;

class Validation
{
    public function searchInputValidation(string $userInput) {
        //explode() function in managingTitleSearchFormInputs() replace spaces with "+" so we must replace it again
        $temp = str_replace("+", " ", $userInput);
        
        //Removing whitespaces from the beginning and end of a string (mainly spaces)
        $result = trim($temp);

        return $result;
    }

    public function isUserInputEmpty($userInput) {
        if ($userInput == "") {
            $result = true;
        } else $result = false;

        return $result;
    }
}