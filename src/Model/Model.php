<?php

namespace App\Model;

class Model
{    
    public function extractingMainData(array $baseInfo, int $entries) {
        $titlesId = [];
        $images = [];
        $imagesUrl = [];
        $titlesType = [];
        $genres = [];
        $originalTitles = [];
        $releaseDates = [];
        $meterRanking = [];
        
        for ($i = 0; $i < $entries; $i++) {
            $titlesId[$i] = $baseInfo['results'][$i]['id'];
            $images[$i] = $baseInfo['results'][$i]['primaryImage'];
            if ($images[$i] != null) {
                $imagesUrl[$i] = $baseInfo['results'][$i]['primaryImage']['url'];            
            } else $imagesUrl[$i] = null;

            $titlesType[$i] = $baseInfo['results'][$i]['titleType']['text'];
            
            if ($baseInfo['results'][$i]['genres'] != null) {
                $genres[$i] = $baseInfo['results'][$i]['genres']['genres'];
                $genresCounter = count($genres[$i]);
                $genresListAsStrings = [];
                
                for ($j = 0; $j < $genresCounter; $j++) {
                    $genresListAsStrings[$j] = $genres[$i][$j]['text'];
                }
                $genres[$i] = $genresListAsStrings;
            } else $genres[$i] = null;
            
            $originalTitles[$i] = $baseInfo['results'][$i]['originalTitleText']['text'];
            $releaseDates[$i] = $baseInfo['results'][$i]['releaseYear'];

            if ($baseInfo['results'][$i]['meterRanking'] != null) {
                $meterRanking[$i] = $baseInfo['results'][$i]['meterRanking']['currentRank'];
            } else $meterRanking[$i] = null;

            $titlesBaseInfo[$i] = [
                "id" => $titlesId[$i], 
                "image" => $imagesUrl[$i], 
                "titleType" => $titlesType[$i], 
                "genres" => $genres[$i], 
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

    // For single entry (movie)
    public function extractingMainDataFromSingleEntry(array $baseInfo) {
        $titleId = $baseInfo['results']['id'];
        $rating = $baseInfo['results']['ratingsSummary']['aggregateRating'];
        $totalVotes = $baseInfo['results']['ratingsSummary']['voteCount'];
        $votes = number_format($totalVotes, 0, ",", " ");

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
    
    // FOR UPCOMING TITLES (IN MAIN PAGE)
    public function extractingMainDataForUpcomingTitles(array $baseInfo, int $entries) {
        $titlesId = [];
        $images = [];
        $imagesUrl = [];
        $titlesType = [];
        $genres = [];
        $originalTitles = [];
        $releaseDates = [];
        
        for ($i = 0; $i < $entries; $i++) {
            $titlesId[$i] = $baseInfo['results'][$i]['id'];
            $images[$i] = $baseInfo['results'][$i]['primaryImage'];
            if ($images[$i] != null) {
                $imagesUrl[$i] = $baseInfo['results'][$i]['primaryImage']['url'];            
            } else $imagesUrl[$i] = null;

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

            $titlesBaseInfo[$i] = [
                "id" => $titlesId[$i], 
                "image" => $imagesUrl[$i], 
                "titleType" => $titlesType[$i], 
                "genres" => $genres[$i], 
                "originalTitle" => $originalTitles[$i], 
                "releaseDate" => $releaseDates[$i],
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
}