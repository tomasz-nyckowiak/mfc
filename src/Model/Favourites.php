<?php

namespace App\Model;

class Favourites
{    
    //MOVIES
    public function addTop10() {
        $top10 = [];
        
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (isset($_POST['pickMoviesSelection1'])) {
                $first = $_POST['pickMoviesSelection1'];
            } else $first = "";

            if (isset($_POST['pickMoviesSelection2'])) {
                $second = $_POST['pickMoviesSelection2'];
            } else $second = "";

            if (isset($_POST['pickMoviesSelection3'])) {
                $third = $_POST['pickMoviesSelection3'];
            } else $third = "";

            if (isset($_POST['pickMoviesSelection4'])) {
                $fourth = $_POST['pickMoviesSelection4'];
            } else $fourth = "";

            if (isset($_POST['pickMoviesSelection5'])) {
                $fifth = $_POST['pickMoviesSelection5'];
            } else $fifth = "";

            if (isset($_POST['pickMoviesSelection6'])) {
                $sixth = $_POST['pickMoviesSelection6'];
            } else $sixth = "";

            if (isset($_POST['pickMoviesSelection7'])) {
                $seventh = $_POST['pickMoviesSelection7'];
            } else $seventh = "";

            if (isset($_POST['pickMoviesSelection8'])) {
                $eighth = $_POST['pickMoviesSelection8'];
            } else $eighth = "";

            if (isset($_POST['pickMoviesSelection9'])) {
                $ninth = $_POST['pickMoviesSelection9'];
            } else $ninth = "";

            if (isset($_POST['pickMoviesSelection10'])) {
                $tenth = $_POST['pickMoviesSelection10'];
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
            if (isset($_POST['editMoviesSelection1'])) {
                $first = $_POST['editMoviesSelection1'];
            } else $first = "";

            if (isset($_POST['editMoviesSelection2'])) {
                $second = $_POST['editMoviesSelection2'];
            } else $second = "";

            if (isset($_POST['editMoviesSelection3'])) {
                $third = $_POST['editMoviesSelection3'];
            } else $third = "";

            if (isset($_POST['editMoviesSelection4'])) {
                $fourth = $_POST['editMoviesSelection4'];
            } else $fourth = "";

            if (isset($_POST['editMoviesSelection5'])) {
                $fifth = $_POST['editMoviesSelection5'];
            } else $fifth = "";

            if (isset($_POST['editMoviesSelection6'])) {
                $sixth = $_POST['editMoviesSelection6'];
            } else $sixth = "";

            if (isset($_POST['editMoviesSelection7'])) {
                $seventh = $_POST['editMoviesSelection7'];
            } else $seventh = "";

            if (isset($_POST['editMoviesSelection8'])) {
                $eighth = $_POST['editMoviesSelection8'];
            } else $eighth = "";

            if (isset($_POST['editMoviesSelection9'])) {
                $ninth = $_POST['editMoviesSelection9'];
            } else $ninth = "";

            if (isset($_POST['editMoviesSelection10'])) {
                $tenth = $_POST['editMoviesSelection10'];
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

    public static function managingFavouriteMovies($top10Movies, $titlesWithImages)
    {
        $imagesForTop10 = [];

        //Matching image to the right title
        if (sizeof($top10Movies) > 0) {
            foreach ($top10Movies as $key_position => $title) {
                if ($title != "") {
                    foreach ($titlesWithImages as $key_title => $images) {                    
                        if ($title == $key_title) {
                            $img = $images['image_Url'];
                            array_push($imagesForTop10, $img);
                        }
                    }
                } else array_push($imagesForTop10, "");                
            }
        }
        return $imagesForTop10;
    }

    //TV SERIES
    public function addTop5Series() {
        $top5 = [];
        
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (isset($_POST['pickSeriesSelection1'])) {
                $first = $_POST['pickSeriesSelection1'];
            } else $first = "";

            if (isset($_POST['pickSeriesSelection2'])) {
                $second = $_POST['pickSeriesSelection2'];
            } else $second = "";

            if (isset($_POST['pickSeriesSelection3'])) {
                $third = $_POST['pickSeriesSelection3'];
            } else $third = "";

            if (isset($_POST['pickSeriesSelection4'])) {
                $fourth = $_POST['pickSeriesSelection4'];
            } else $fourth = "";

            if (isset($_POST['pickSeriesSelection5'])) {
                $fifth = $_POST['pickSeriesSelection5'];
            } else $fifth = "";
            
            if (isset($_POST['typeOfList'])) {
                $typeOfList = $_POST['typeOfList'];
            }

            $top5 = [
                '1.' => $first,
                '2.' => $second,
                '3.' => $third,
                '4.' => $fourth,
                '5.' => $fifth, 
                'typeOfList' => $typeOfList
            ];
        }
        return $top5;
    }

    public function updateTop5() {
        $top5 = [];
        
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (isset($_POST['editSeriesSelection1'])) {
                $first = $_POST['editSeriesSelection1'];
            } else $first = "";

            if (isset($_POST['editSeriesSelection2'])) {
                $second = $_POST['editSeriesSelection2'];
            } else $second = "";

            if (isset($_POST['editSeriesSelection3'])) {
                $third = $_POST['editSeriesSelection3'];
            } else $third = "";

            if (isset($_POST['editSeriesSelection4'])) {
                $fourth = $_POST['editSeriesSelection4'];
            } else $fourth = "";

            if (isset($_POST['editSeriesSelection5'])) {
                $fifth = $_POST['editSeriesSelection5'];
            } else $fifth = "";
            
            if (isset($_POST['editTypeOfList'])) {
                $typeOfList = $_POST['editTypeOfList'];
            }

            $top5 = [
                '1.' => $first,
                '2.' => $second,
                '3.' => $third,
                '4.' => $fourth,
                '5.' => $fifth, 
                'typeOfList' => $typeOfList
            ];
        }
        return $top5;
    }

    public static function managingFavouriteSeries($top5series, $titlesWithImages)
    {
        $imagesForTop5 = [];

        //Matching image to the right title
        if (sizeof($top5series) > 0) {
            foreach ($top5series as $key_position => $title) {
                if ($title != "") {
                    foreach ($titlesWithImages as $key_title => $images) {                    
                        if ($title == $key_title) {
                            $img = $images['image_Url'];
                            array_push($imagesForTop5, $img);
                        }
                    }
                } else array_push($imagesForTop5, "");                
            }
        }
        return $imagesForTop5;
    }
}