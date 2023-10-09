<?php

namespace App\Model;

class Model
{
    public function extractingMainData(array $baseInfo, int $entries) {
        $titlesId = [];
        $ratings = [];
        $votes = [];
        $images = [];
        $titlesType = [];
        $genres = [];
        $originalTitles = [];
        $releaseDates = [];
        $runtimes = [];
        $plots = [];
        
        for ($i = 0; $i < $entries; $i++) {
            $titlesId[$i] = $baseInfo['results'][$i]['id'];
            $ratings[$i] = $baseInfo['results'][$i]['ratingsSummary']['aggregateRating'];
            $votes[$i] = $baseInfo['results'][$i]['ratingsSummary']['voteCount'];
            $images[$i] = $baseInfo['results'][$i]['primaryImage'];
            $titlesType[$i] = $baseInfo['results'][$i]['titleType']['text'];
            $genres[$i] = $baseInfo['results'][$i]['genres']['genres'];
            $genresCounter = count($genres[$i]);
            $genresListAsStrings = [];
            for ($j = 0; $j < $genresCounter; $j++) {
                $genresListAsStrings[$j] = $genres[$i][$j]['text'];
            }
            $genres[$i] = $genresListAsStrings;
            $originalTitles[$i] = $baseInfo['results'][$i]['originalTitleText']['text'];
            $releaseDates[$i] = $baseInfo['results'][$i]['releaseYear'];
            //$releaseDates[$i] = $baseInfo['results'][$i]['releaseDate']['year']; // day and month also available
            $runtimes[$i] = $baseInfo['results'][$i]['runtime']; // if available is in seconds with key 'seconds'            
            $plots[$i] = $baseInfo['results'][$i]['plot'];
            // plot can be null so we don't get deeper(line below) to avoid error
            // $plots[$i] = $baseInfo['results'][$i]['plot']['plotText']['plainText'];

            $titlesBaseInfo[$i] = [
                "id" => $titlesId[$i], 
                "rating" => $ratings[$i], 
                "votes" => $votes[$i], 
                "image" => $images[$i], 
                "titleType" => $titlesType[$i], 
                "genres" => $genres[$i], 
                "originalTitle" => $originalTitles[$i], 
                "releaseDate" => $releaseDates[$i], 
                "runtime" => $runtimes[$i], 
                "plot" => $plots[$i]
            ];
        }

        return $titlesBaseInfo;       
    }

    public function extractingMainCast(array $mainCast, int $entries) {
        $casts = [];
        
        for ($i = 0; $i < $entries; $i++) {
            $casts[$i] = $mainCast['results'][$i]['cast']['edges'];
            $castsCounter = count($casts[$i]);
            $castList = [];
            for ($j = 0; $j < $castsCounter; $j++) {
                $castList[$j] = $casts[$i][$j]['node']['name']['nameText']['text'];
                // From (...) ['name']['id'] I can get actor IMDB id
            }
            $casts[$i] = $castList;
            $fullCasts[$i] = ["cast" => $casts[$i]];
        }
        
        return $fullCasts;      
    }

    public function extractingCreators(array $crew, int $entries) {
        $creators = [];
        $directors = [];
        $writers = [];
        
        for ($i = 0; $i < $entries; $i++) {
            $creators[$i] = $crew['results'][$i]['creators'];
            $creatorsCounter = count($creators[$i]);

            $directors[$i] = $crew['results'][$i]['directors'];
            $directorsCounter = count($directors[$i]);

            $writers[$i] = $crew['results'][$i]['writers'];
            $writersCounter = count($writers[$i]);
            
            $creatorsList = [];
            $directorsList = [];
            $writersList = [];
            
            if ($creatorsCounter != 0) {
                $creditsCounter = count($creators[$i][0]['credits']);
                for ($j = 0; $j < $creditsCounter; $j++) {
                    $creatorsList[$j] = $creators[$i][0]['credits'][$j]['name']['nameText']['text'];
                }
            }            
            $creators[$i] = $creatorsList;

            if ($directorsCounter != 0) {
                $creditsCounter = count($directors[$i][0]['credits']);
                for ($j = 0; $j < $creditsCounter; $j++) {
                    $directorsList[$j] = $directors[$i][0]['credits'][$j]['name']['nameText']['text'];
                }
            }            
            $directors[$i] = $directorsList;           
            
            if ($writersCounter != 0) {
                $creditsCounter = count($writers[$i][0]['credits']);
                for ($j = 0; $j < $creditsCounter; $j++) {
                    $writersList[$j] = $writers[$i][0]['credits'][$j]['name']['nameText']['text'];
                }
            }            
            $writers[$i] = $writersList;

            $fullCrew[$i] = [
                "creators" => $creators[$i],
                "directors" => $directors[$i],
                "writers" => $writers[$i]
            ];
        }

        return $fullCrew;
    }
}