<?php

namespace App\Model;

class AddTitle
{
    public function addTitleManually() {        
        $allInfo = [];
        
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $title = $_POST['originalTitle'];
            
            if (isset($_POST['titleType'])) {
                $titleType = $_POST['titleType'];
            } else $titleType = "";            
            
            if (isset($_POST['genres'])) {
                $genres = $_POST['genres'];
            } else $genres = "";
            
            if (isset($_POST['director'])) {
                $director = $_POST['director'];
            } else $director = "";

            if (isset($_POST['writer'])) {
                $writer = $_POST['writer'];
            } else $writer = "";
            
            if (isset($_POST['creator'])) {
                $creator = $_POST['creator'];
            } else $creator = "";
            
            if (isset($_POST['cast'])) {
                $cast = $_POST['cast'];
            } else $cast = "";
            
            if (isset($_POST['runtime'])) {
                $runtime = $_POST['runtime'];
            } else $runtime = "";
            
            ##### Release date #####
            if (isset($_POST['releaseDate'])) {
                $releaseDate = $_POST['releaseDate'];
            } else $releaseDate = "";

            if (isset($_POST['releaseDateEndYear'])) {
                $releaseDateEndYear = $_POST['releaseDateEndYear'];
            } else $releaseDateEndYear = "";

            if ($releaseDateEndYear == "") {
                if ($titleType == "Tv Series" || $titleType == "Podcast Episode" || 
                    $titleType == "Podcast Series" || $titleType == "Tv Mini Series") {
                    if ($releaseDate == date("Y")) {
                        $finalReleaseDate = $releaseDate . "-";
                    } else $finalReleaseDate = $releaseDate;                        
                } else $finalReleaseDate = $releaseDate;                
            } else $finalReleaseDate = $releaseDate . "-" . $releaseDateEndYear;            
            ##### ##### #####
            
            ##### Ratings #####
            if (isset($_POST['rating'])) {
                $rating = $_POST['rating'];                
            } else $rating = "";
            
            if (isset($_POST['imdbRating'])) {
                $imdbRating = $_POST['imdbRating'];
            } else $imdbRating = "";
            ##### ##### #####
            
            if (isset($_POST['plot'])) {
                $plot = $_POST['plot'];
            } else $plot = "";
            
            ##### Image #####
            //Name of the uploaded image will change later for unique id,
            //so it doesn't matter much - we can leave it empty for now.
            $imageName = "";

            if (isset($_FILES['fileName'])) {
                $image = $_FILES['fileName'];
            } else $image = "";
            ##### ##### #####
            
            if (isset($_POST['toWatchManually'])) {
                $toWatch = 1;
            } else $toWatch = "";
            
            if (isset($_POST['review'])) {
                $review = $_POST['review'];
            } else $review = "";
                        
            $allInfo = [
                'title' => $title, 
                'titleType' => $titleType, 
                'genres' => $genres, 
                'directors' => $director, 
                'writers' => $writer, 
                'creators' => $creator, 
                'cast' => $cast, 
                'runtime' => $runtime, 
                'releaseDate' => $finalReleaseDate, 
                'rating' => $rating, 
                'imdbRating' => $imdbRating, 
                'plot' => $plot,
                'imageName' => $imageName,
                'imageData' => $image,
                'toWatch' => $toWatch, 
                'review' => $review
            ];
        }
        return $allInfo;        
    }   
}