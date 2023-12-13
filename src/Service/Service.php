<?php

namespace App\Service;

class Service
{
    public function search(string $url) {        
        $curl = curl_init();
        
        curl_setopt_array($curl, [
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => [
                "X-RapidAPI-Host: moviesdatabase.p.rapidapi.com",
                "X-RapidAPI-Key: 5bd9534546msh9b44eda3ed800bbp161892jsn46cfc0cdeee6"
            ],
        ]);

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            return "cURL Error #:" . $err;
        } else {
            $parametersAsArray = [];
            $parametersAsArray = json_decode($response, true);
            
            return $parametersAsArray;
        }
    }

    public function preparingUserInput(string $input) {
        // Removing whitespaces from the beginning and end of a string (mainly spaces)
        $userInput = trim($input);
        // Replacing spaces between words for proper format in the query!
        if (str_contains($userInput, " ")) {
            $userInput = str_replace(" ", "%20", $userInput);
            return $userInput;
        }
        
        return $userInput;        
    }

    public function creatingBasicUrlWithoutOptionalInfo(string $userInput, int $pageNumber) {
        $url = "https://moviesdatabase.p.rapidapi.com";
        $endPoint = "/titles/search/title/";
        $exact = "?exact=false";
        $page = "&page=";
        $limit = "&limit=3";

        $urlFinal = $url . $endPoint . $userInput . $exact . $page . $pageNumber . $limit;
        
        return $urlFinal;       
    }

    public function creatingBaseInfoUrl(string $url) {
        $info = "&info=base_info";
        $urlFinal = $url . $info;
        
        return $urlFinal;       
    }

    public function creatingUrlForExtendedCast(string $url) {
        $info = "&info=extendedCast";
        $urlFinal = $url . $info;
        
        return $urlFinal;       
    }

    // public function creatingUrlForCreators(string $url) {
    //     $info = "&info=creators_directors_writers";
    //     $urlFinal = $url . $info;
        
    //     return $urlFinal;       
    // }

    public function creatingBasicUrlWithoutOptionalInfoForSingleEntry(string $id) {
        $url = "https://moviesdatabase.p.rapidapi.com";
        $endPoint = "/titles/";      

        $urlFinal = $url . $endPoint . $id;
        
        return $urlFinal;       
    }
    
    public function creatingBaseInfoUrlForSingleEntry(string $url) {
        $info = "?info=base_info";
        $urlFinal = $url . $info;
        
        return $urlFinal;       
    }

    public function creatingUrlForExtendedCastForSingleEntry(string $url) {
        $info = "?info=extendedCast";
        $urlFinal = $url . $info;
        
        return $urlFinal;       
    }

    public function creatingUrlForCreatorsForSingleEntry(string $url) {
        $info = "?info=creators_directors_writers";
        $urlFinal = $url . $info;
        
        return $urlFinal;       
    }
    
    //UPCOMING TITLES
    public function creatingBasicUrlForUpcomingTitles($stYear, $eYear) {
        $url = "https://moviesdatabase.p.rapidapi.com";
        $endPoint = "/titles/x/upcoming";
        $startYear = "?startYear=" . $stYear;
        $sort = "&sort=year.incr"; 
        $limit = "&limit=5";        
        $endYear = "&endYear=" . $eYear;          

        $urlFinal = $url . $endPoint . $startYear . $sort . $limit . $endYear;
        
        return $urlFinal;       
    }

    public function creatingBaseInfoUrlForUpcomingTitles(string $url) {
        $info = "&info=base_info";
        $urlFinal = $url . $info;
        
        return $urlFinal;       
    }

    // public function creatingExtendedCastUrlForUpcomingTitles(string $url) {
    //     $info = "&info=extendedCast";
    //     $urlFinal = $url . $info;
        
    //     return $urlFinal;       
    // }
    
    //ADULT
    public function creatingUrlWithAdult(string $userInput, int $pageNumber) {
        $url = "https://moviesdatabase.p.rapidapi.com";
        $endPointTitle = "/titles/search/title/";
        $exact = "?exact=false";
        $page = "&page=";
        $pageNumberAsInt = $pageNumber;
        $limit = "&limit=3";
        $isAdult = "&info=isAdult";

        $urlFinal = $url . $endPointTitle . $userInput . $exact . $isAdult . $page . $pageNumberAsInt . $limit;
        
        return $urlFinal;       
    }

    //UPDATE FOR IMDB RATING AND IMAGE
    public function creatingUrlForTitleUpdate(string $title) {
        $url = "https://moviesdatabase.p.rapidapi.com";
        $endPointTitle = "/titles/search/title/";
        $exact = "?exact=true";
        $info = "&info=base_info";
        $page = "&page=1";
        $limit = "&limit=1";

        $urlFinal = $url . $endPointTitle . $title . $exact . $info . $page . $limit;
        
        return $urlFinal;       
    }
}