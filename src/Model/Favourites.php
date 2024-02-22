<?php

namespace App\Model;

class Favourites
{
    //public static $first = "1.";
    // public static $second = "2.";
    // public static $third = "3.";
    // public static $fourth = "4.";
    // public static $fifth = "5.";
    // public $sixth = "6.";
    // public $seventh = "7.";
    // public $eighth = "8.";
    // public $ninth = "9.";
    // public $tenth = "10.";
    
    public function addTop10() {
        $top10 = [];
        
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (isset($_POST['movieSelection1'])) {
                $first = $_POST['movieSelection1'];
            } else $first = "";

            if (isset($_POST['movieSelection2'])) {
                $second = $_POST['movieSelection2'];
            } else $second = "";

            if (isset($_POST['movieSelection3'])) {
                $third = $_POST['movieSelection3'];
            } else $third = "";

            if (isset($_POST['movieSelection4'])) {
                $fourth = $_POST['movieSelection4'];
            } else $fourth = "";

            if (isset($_POST['movieSelection5'])) {
                $fifth = $_POST['movieSelection5'];
            } else $fifth = "";

            if (isset($_POST['movieSelection6'])) {
                $sixth = $_POST['movieSelection6'];
            } else $sixth = "";

            if (isset($_POST['movieSelection7'])) {
                $seventh = $_POST['movieSelection7'];
            } else $seventh = "";

            if (isset($_POST['movieSelection8'])) {
                $eighth = $_POST['movieSelection8'];
            } else $eighth = "";

            if (isset($_POST['movieSelection9'])) {
                $ninth = $_POST['movieSelection9'];
            } else $ninth = "";

            if (isset($_POST['movieSelection10'])) {
                $tenth = $_POST['movieSelection10'];
            } else $tenth = "";
            
            if (isset($_POST['typeOfList'])) {
                $typeOfList = $_POST['typeOfList'];
            }

            $top10 = [
                '1.' => $first,
                '2.' => $second,
                '3.' => $third,
                '4.' => $fourth,
                '5.' => $fifth,
                '6.' => $sixth,
                '7.' => $seventh,
                '8.' => $eighth,
                '9.' => $ninth,
                '10.' => $tenth, 
                'typeOfList' => $typeOfList
            ];
        }
        return $top10;
    }
    
    public function updateTop10() {
        $top10 = [];
        
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (isset($_POST['editMovieSelection1'])) {
                $first = $_POST['editMovieSelection1'];
            } else $first = "";

            if (isset($_POST['editMovieSelection2'])) {
                $second = $_POST['editMovieSelection2'];
            } else $second = "";

            if (isset($_POST['editMovieSelection3'])) {
                $third = $_POST['editMovieSelection3'];
            } else $third = "";

            if (isset($_POST['editMovieSelection4'])) {
                $fourth = $_POST['editMovieSelection4'];
            } else $fourth = "";

            if (isset($_POST['editMovieSelection5'])) {
                $fifth = $_POST['editMovieSelection5'];
            } else $fifth = "";

            if (isset($_POST['editMovieSelection6'])) {
                $sixth = $_POST['editMovieSelection6'];
            } else $sixth = "";

            if (isset($_POST['editMovieSelection7'])) {
                $seventh = $_POST['editMovieSelection7'];
            } else $seventh = "";

            if (isset($_POST['editMovieSelection8'])) {
                $eighth = $_POST['editMovieSelection8'];
            } else $eighth = "";

            if (isset($_POST['editMovieSelection9'])) {
                $ninth = $_POST['editMovieSelection9'];
            } else $ninth = "";

            if (isset($_POST['editMovieSelection10'])) {
                $tenth = $_POST['editMovieSelection10'];
            } else $tenth = "";
            
            if (isset($_POST['editTypeOfList'])) {
                $typeOfList = $_POST['editTypeOfList'];
            }

            $top10 = [
                '1.' => $first,
                '2.' => $second,
                '3.' => $third,
                '4.' => $fourth,
                '5.' => $fifth,
                '6.' => $sixth,
                '7.' => $seventh,
                '8.' => $eighth,
                '9.' => $ninth,
                '10.' => $tenth, 
                'typeOfList' => $typeOfList
            ];
        }
        return $top10;
    }
}