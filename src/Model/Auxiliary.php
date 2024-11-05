<?php

namespace App\Model;

use DateTime;

class Auxiliary
{
    // Setting proper format for runtime
    public function runtime(int $seconds) {
        $minutes = $seconds / 60;
        $hours = $minutes / 60;
        $rest = $minutes % 60;
        $result = intval($hours) . "h " . $rest . "m";

        return $result;
    }

    // Setting end year for upcoming titles
    public function setStartYear() {
        $currentDateTime = new DateTime('now');
        
        return $currentDateTime->format('Y');
    } 
    
    // Setting end year for upcoming titles
    public function setEndYear() {
        $currentDateTime = new DateTime('now');
        $currentDateTime->modify('+1 year');
        
        return $currentDateTime->format('Y');
    }

    public static function shortenVersionOfTheNumber($number)
    {
        $suffix = ["", "K", "M", "B"];
        $precision = 1;
        
        for ($i = 0; $i < count($suffix); $i++) {
            $divide = $number / pow(1000, $i);
            if ($divide < 1000){
                return round($divide, $precision).$suffix[$i];
                break;
            }
        }
    }
    
    public static function shortenVersionOfNumberOfVotes($votes)
    {
        $number = str_replace(' ', '', $votes);
        $result = self::shortenVersionOfTheNumber($number);

        return $result;
    }

    public static function getTodaysDate()
    {
        $currentDateTime = new DateTime('now');
        $formattedDate = $currentDateTime->format('m/Y');

        return $formattedDate;
    }
}