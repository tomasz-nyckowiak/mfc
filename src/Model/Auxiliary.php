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
}