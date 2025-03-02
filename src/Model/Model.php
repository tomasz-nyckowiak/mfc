<?php

namespace App\Model;

use App\Model\Auxiliary;
use App\Model\Validation;

class Model
{    
    public function checkingResponseOutcome(array $baseInfo) {
        $isThereEntries = true;

        if ($baseInfo['entries'] == 0) {
            $isThereEntries = false;
        }
        
        return $isThereEntries;
    }
    
    public function extractingMostPopularTitles(array $baseInfo) {
        $titles = [];
        
        $howManyOutcomes = $baseInfo['entries'];

        for ($i = 0; $i < $howManyOutcomes; $i++) {
            if ($baseInfo['results'][$i]['meterRanking'] != null) {
                array_push($titles, $baseInfo['results'][$i]);
            }
        }
        
        return $titles;
    }

    public function extractingLessPopularTitles(array $baseInfo) {
        $titles = [];

        $howManyOutcomes = $baseInfo['entries'];
        
        for ($i = 0; $i < $howManyOutcomes; $i++) {
            if ($baseInfo['results'][$i]['meterRanking'] == null) {
                array_push($titles, $baseInfo['results'][$i]);
            }
        }
        return $titles;
    }

    public function isArrayWithTitlesNotEmpty(array $titles) {
        if (!empty($titles)) {
            return true;
        } else return false;
    }
    
    public function extractingMainData(array $titles) {
        $titlesId = [];
        $images = [];
        $imagesUrl = [];
        $titlesType = [];
        $originalTitles = [];
        $releaseDates = [];
        $meterRanking = [];

        $entries = sizeof($titles);
        
        for ($i = 0; $i < $entries; $i++) {
            $titlesId[$i] = $titles[$i]['id'];
            $images[$i] = $titles[$i]['primaryImage'];
            if ($images[$i] != null) {
                $imagesUrl[$i] = $titles[$i]['primaryImage']['url'];            
            } else $imagesUrl[$i] = null;

            $titlesType[$i] = $titles[$i]['titleType']['text'];
            
            $originalTitles[$i] = $titles[$i]['originalTitleText']['text'];
            
            if ($titlesType[$i] == "TV Series") {
                if ($titles[$i]['releaseYear'] != null) {
                    $releaseDates[$i] = ["year" => $titles[$i]['releaseYear']['year'], "endYear" => $titles[$i]['releaseYear']['endYear']];
                } else $releaseDates[$i] = null;
            } else {
                if ($titles[$i]['releaseYear'] != null) {
                    $releaseDates[$i] = $titles[$i]['releaseYear']['year'];
                } else $releaseDates[$i] = null;
            }                        

            if ($titles[$i]['meterRanking'] != null) {
                $meterRanking[$i] = $titles[$i]['meterRanking']['currentRank'];
            } else $meterRanking[$i] = null;            

            $titlesBaseInfo[$i] = [
                "id" => $titlesId[$i], 
                "image" => $imagesUrl[$i], 
                "titleType" => $titlesType[$i], 
                "originalTitle" => $originalTitles[$i], 
                "releaseDate" => $releaseDates[$i],
                "meterRanking" => $meterRanking[$i]
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
            }
            $casts[$i] = $castList;
            $fullCasts[$i] = ["cast" => $casts[$i]];
        }
        
        return $fullCasts;      
    }

    //For single entry
    public function extractingMainDataFromSingleEntry(array $baseInfo)
    {
        $titleId = $baseInfo['results']['id'];
        $rating = $baseInfo['results']['ratingsSummary']['aggregateRating'];
        
        $totalVotes = $baseInfo['results']['ratingsSummary']['voteCount'];
        $temp = number_format($totalVotes, 0, ",", " ");
        $votes = Auxiliary::shortenVersionOfNumberOfVotes($temp);

        $image = $baseInfo['results']['primaryImage'];
        if ($image != null) {
            $imageUrl = $baseInfo['results']['primaryImage']['url'];            
        } else $imageUrl = null;

        $titleType = $baseInfo['results']['titleType']['text'];
        
        $genres = $baseInfo['results']['genres']['genres'];
        $genresCounter = count($genres);
        $genresListAsStrings = [];
        for ($i = 0; $i < $genresCounter; $i++) {
            $genresListAsStrings[$i] = $genres[$i]['text'];
        }
        $genres = $genresListAsStrings;
        
        $originalTitle = $baseInfo['results']['originalTitleText']['text'];        
        $releaseDate = $baseInfo['results']['releaseYear'];
                
        $runtime = $baseInfo['results']['runtime'];
        if ($runtime != null) {
            $runtimeInSeconds = $baseInfo['results']['runtime']['seconds'];
            $other = new Auxiliary();  
            $runtimeAsString = $other->runtime($runtimeInSeconds);
        } else $runtimeAsString = null;
                 
        $plot = $baseInfo['results']['plot'];
        if ($plot != null) {
            $plot = $baseInfo['results']['plot']['plotText']['plainText'];           
        } else $plot = null;

        $titleBaseInfo = [
            "titleId" => $titleId, 
            "rating" => $rating, 
            "votes" => $votes, 
            "image" => $imageUrl, 
            "titleType" => $titleType, 
            "genres" => $genres, 
            "originalTitle" => $originalTitle, 
            "releaseDate" => $releaseDate, 
            "runtime" => $runtimeAsString, 
            "plot" => $plot
        ];

        return $titleBaseInfo;       
    }

    public function extractingMainCastFromSingleEntry(array $mainCast) {
        $cast = [];
        $images = [];
        $actorsId = [];
        $charactersNames = [];
        $fullInfo = [];
        
        $cast = $mainCast['results']['cast']['edges'];
        $castCounter = count($cast);

        $castList = [];
        $imagesUrlList = [];
        for ($i = 0; $i < $castCounter; $i++) {
            $castList[$i] = $cast[$i]['node']['name']['nameText']['text'];
            
            $images[$i] = $cast[$i]['node']['name']['primaryImage'];
            if ($images[$i] != null) {
                $imagesUrlList[$i] = $cast[$i]['node']['name']['primaryImage']['url'];            
            } else $imagesUrlList[$i] = null;
            
            $actorsId[$i] = $cast[$i]['node']['name']['id'];
            
            $charactersLists[$i] = $cast[$i]['node']['characters'];
            if ($charactersLists[$i] != null) {
                $charactersNames[$i] = $cast[$i]['node']['characters'][0]['name'];            
            } else $charactersNames[$i] = null;        

            $allDataAboutCast[$i] = [
                "id" => $actorsId[$i],
                "name" => $castList[$i],
                "characterName" => $charactersNames[$i],
                "image" => $imagesUrlList[$i]        
            ];            
        }

        $fullInfo = ["cast" => $allDataAboutCast];

        return $fullInfo;      
    }

    public function extractingCreatorsFromSingleEntry(array $crew) {
        $creators = [];
        $directors = [];
        $writers = [];
        
        $creators = $crew['results']['creators'];
        $creatorsCounter = count($creators);

        $directors = $crew['results']['directors'];
        $directorsCounter = count($directors);

        $writers = $crew['results']['writers'];
        $writersCounter = count($writers);
        
        $creatorsList = [];
        $directorsList = [];
        $writersList = [];
        
        if ($creatorsCounter != 0) {
            $creditsCounter = count($creators[0]['credits']);
            for ($i = 0; $i < $creditsCounter; $i++) {
                $creatorsList[$i] = $creators[0]['credits'][$i]['name']['nameText']['text'];
            }
        }            
        $creators = $creatorsList;

        if ($directorsCounter != 0) {
            $creditsCounter = count($directors[0]['credits']);
            for ($i = 0; $i < $creditsCounter; $i++) {
                $directorsList[$i] = $directors[0]['credits'][$i]['name']['nameText']['text'];
            }
        }            
        $directors = $directorsList;           
        
        if ($writersCounter != 0) {
            $creditsCounter = count($writers[0]['credits']);
            for ($i = 0; $i < $creditsCounter; $i++) {
                $writersList[$i] = $writers[0]['credits'][$i]['name']['nameText']['text'];
            }
        }            
        $writers = $writersList;

        $fullCrew = [
            "creators" => $creators,
            "directors" => $directors,
            "writers" => $writers
        ];

        return $fullCrew;
    }
    
    //FOR UPCOMING TITLES (IN MAIN PAGE)
    public function extractingMainDataForUpcomingTitles(array $baseInfo, int $entries) {
        $titlesId = [];
        $images = [];
        $imagesUrl = [];        
        
        for ($i = 0; $i < $entries; $i++) {
            $titlesId[$i] = $baseInfo['results'][$i]['id'];
            $images[$i] = $baseInfo['results'][$i]['primaryImage'];            
            if ($images[$i] != null) {
                $imagesUrl[$i] = $baseInfo['results'][$i]['primaryImage']['url'];            
            } else $imagesUrl[$i] = null;                        

            $titlesBaseInfo[$i] = [
                "id" => $titlesId[$i], 
                "image" => $imagesUrl[$i]                
            ];
        }
        return $titlesBaseInfo;       
    }

    public function extractingNeededData(array $baseInfo) {
        $rating = $baseInfo['results'][0]['ratingsSummary']['aggregateRating'];
        if ($rating != null) {
            $imdbRating = $baseInfo['results'][0]['ratingsSummary']['aggregateRating'];            
        } else $imdbRating = null;
        
        $image = $baseInfo['results'][0]['primaryImage'];
        if ($image != null) {
            $imageUrl = $baseInfo['results'][0]['primaryImage']['url'];            
        } else $imageUrl = null;
        
        $titleInfo = ["rating" => $imdbRating, "image" => $imageUrl];

        return $titleInfo;      
    }

    public function sortingTitlesByPopularity(array $popularTitles) {
        usort($popularTitles, function($item1, $item2) {
            return $item1['meterRanking'] <=> $item2['meterRanking'];
        });
        
        return $popularTitles;
    }

    public function managingTitleSearchFormInputs() {
        $response = file_get_contents('php://input');
        $arrayOfInputs = explode("&", $response);
        
        $title = substr($arrayOfInputs[0], 7); //0 => "search="
        $titleType = substr($arrayOfInputs[1], 10); //1 => "titleType="
        $startYear = substr($arrayOfInputs[2], 10); //2 => "startYear="
        $endYear = substr($arrayOfInputs[3], 8); //3 => "endYear="

        //Validation
        $temp = new Validation();
        $result = $temp->searchInputValidation($title);
        
        if ($temp->isUserInputEmpty($titleType)) {
            $isTitleTypeEmpty = true;
        } else $isTitleTypeEmpty = false;
        if ($temp->isUserInputEmpty($startYear)) {
            $isStartYearEmpty = true;
        } else $isStartYearEmpty = false;
        if ($temp->isUserInputEmpty($endYear)) {
            $isEndYearEmpty = true;
        } else $isEndYearEmpty = false;
        
        $inputs = [
            "search" => $result,
            "titleType" => $titleType,
            "isTitleTypeEmpty" => $isTitleTypeEmpty,
            "startYear" => $startYear,
            "isStartYearEmpty" => $isStartYearEmpty,
            "endYear" => $endYear,
            "isEndYearEmpty" => $isEndYearEmpty
        ];

        return $inputs;
    }
}