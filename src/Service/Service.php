<?php

namespace App\Service;

class Service
{
    const BASIC_URL = "https://moviesdatabase.p.rapidapi.com";
    const TITLE_TYPE = "titleType=";
    const INFO = "info=";
    const EXACT = "exact=false";
    const LIMIT = "limit=";
    const START_YEAR = "startYear=";
    const END_YEAR = "endYear=";
    const SORT = "sort=";
    const PAGE = "page=";
    
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

    public function preparingUserInput(string $userInput) {        
        //Replacing spaces between words for proper format in the query!
        if (str_contains($userInput, " ")) {
            $userInput = str_replace(" ", "%20", $userInput);
            return $userInput;
        }        
        return $userInput;        
    }        

    public function preparingUrlForSearchRequestWithTitleTypeAndStartYearAndEndYear(string $userInput, string $type, string $stYear, string $eYear) {
        $url = self::BASIC_URL;
        $endPoint = "/titles/search/title/";
        $exact = "?" . self::EXACT;        
        $info = "&" . self::INFO . "base_info";
        $endYear = "&" . self::END_YEAR . $eYear;
        $startYear = "&" . self::START_YEAR . $stYear;
        $titleType = "&" . self::TITLE_TYPE . $type;
        $limit = "&" . self::LIMIT . "30";

        $finalUrl = $url . $endPoint . $userInput . $exact . $info . $endYear . $startYear . $titleType . $limit;
        
        return $finalUrl;     
    }

    public function preparingUrlForSearchRequestWithTitleTypeAndStartYear(string $userInput, string $type, string $stYear) {
        $url = self::BASIC_URL;
        $endPoint = "/titles/search/title/";
        $exact = "?" . self::EXACT;        
        $info = "&" . self::INFO . "base_info";
        $startYear = "&" . self::START_YEAR . $stYear;
        $titleType = "&" . self::TITLE_TYPE . $type;
        $limit = "&" . self::LIMIT . "30";

        $finalUrl = $url . $endPoint . $userInput . $exact . $info . $startYear . $titleType . $limit;
        
        return $finalUrl;     
    }

    public function preparingUrlForSearchRequestWithTitleTypeAndEndYear(string $userInput, string $type, string $eYear) {
        $url = self::BASIC_URL;
        $endPoint = "/titles/search/title/";
        $exact = "?" . self::EXACT;        
        $info = "&" . self::INFO . "base_info";
        $endYear = "&" . self::END_YEAR . $eYear;
        $titleType = "&" . self::TITLE_TYPE . $type;
        $limit = "&" . self::LIMIT . "30";

        $finalUrl = $url . $endPoint . $userInput . $exact . $info . $endYear . $titleType . $limit;
        
        return $finalUrl;     
    }

    public function preparingUrlForSearchRequestWithStartYearAndEndYearRequestMovies(string $userInput, string $stYear, string $eYear) {
        $url = self::BASIC_URL;
        $endPoint = "/titles/search/title/";
        $exact = "?" . self::EXACT;        
        $info = "&" . self::INFO . "base_info";
        $endYear = "&" . self::END_YEAR . $eYear;
        $startYear = "&" . self::START_YEAR . $stYear;
        $titleType = "&" . self::TITLE_TYPE . "movie";
        $limit = "&" . self::LIMIT . "30";

        $finalUrl = $url . $endPoint . $userInput . $exact . $info . $endYear . $startYear . $titleType . $limit;
        
        return $finalUrl;     
    }

    public function preparingUrlForSearchRequestWithStartYearAndEndYearRequestTvSeries(string $userInput, string $stYear, string $eYear) {
        $url = self::BASIC_URL;
        $endPoint = "/titles/search/title/";
        $exact = "?" . self::EXACT;        
        $info = "&" . self::INFO . "base_info";
        $endYear = "&" . self::END_YEAR . $eYear;
        $startYear = "&" . self::START_YEAR . $stYear;
        $titleType = "&" . self::TITLE_TYPE . "tvSeries";
        $limit = "&" . self::LIMIT . "30";

        $finalUrl = $url . $endPoint . $userInput . $exact . $info . $endYear . $startYear . $titleType . $limit;
        
        return $finalUrl;     
    }

    public function preparingUrlForSearchRequestWithEndYearRequestMovies(string $userInput, string $eYear) {
        $url = self::BASIC_URL;
        $endPoint = "/titles/search/title/";
        $exact = "?" . self::EXACT;        
        $info = "&" . self::INFO . "base_info";
        $endYear = "&" . self::END_YEAR . $eYear;
        $titleType = "&" . self::TITLE_TYPE . "movie";
        $limit = "&" . self::LIMIT . "30";

        $finalUrl = $url . $endPoint . $userInput . $exact . $info . $endYear . $titleType . $limit;
        
        return $finalUrl;     
    }

    public function preparingUrlForSearchRequestWithEndYearRequestTvSeries(string $userInput, string $eYear) {
        $url = self::BASIC_URL;
        $endPoint = "/titles/search/title/";
        $exact = "?" . self::EXACT;        
        $info = "&" . self::INFO . "base_info";
        $endYear = "&" . self::END_YEAR . $eYear;
        $titleType = "&" . self::TITLE_TYPE . "tvSeries";
        $limit = "&" . self::LIMIT . "30";

        $finalUrl = $url . $endPoint . $userInput . $exact . $info . $endYear . $titleType . $limit;
        
        return $finalUrl;     
    }

    public function preparingUrlForSearchRequestWithStartYearRequestMovies(string $userInput, string $stYear) {
        $url = self::BASIC_URL;
        $endPoint = "/titles/search/title/";
        $exact = "?" . self::EXACT;        
        $info = "&" . self::INFO . "base_info";
        $startYear = "&" . self::START_YEAR . $stYear;
        $titleType = "&" . self::TITLE_TYPE . "movie";
        $limit = "&" . self::LIMIT . "30";

        $finalUrl = $url . $endPoint . $userInput . $exact . $info . $startYear . $titleType . $limit;
        
        return $finalUrl;     
    }

    public function preparingUrlForSearchRequestWithStartYearRequestTvSeries(string $userInput, string $stYear) {
        $url = self::BASIC_URL;
        $endPoint = "/titles/search/title/";
        $exact = "?" . self::EXACT;        
        $info = "&" . self::INFO . "base_info";
        $startYear = "&" . self::START_YEAR . $stYear;
        $titleType = "&" . self::TITLE_TYPE . "tvSeries";
        $limit = "&" . self::LIMIT . "30";

        $finalUrl = $url . $endPoint . $userInput . $exact . $info . $startYear . $titleType . $limit;
        
        return $finalUrl;     
    }

    public function preparingUrlForSearchRequestWithTitleType(string $userInput, string $type) {
        $url = self::BASIC_URL;
        $endPoint = "/titles/search/title/";
        $exact = "?" . self::EXACT;        
        $info = "&" . self::INFO . "base_info";
        $titleType = "&" . self::TITLE_TYPE . $type;
        $limit = "&" . self::LIMIT . "30";

        $finalUrl = $url . $endPoint . $userInput . $exact . $info . $titleType . $limit;
        
        return $finalUrl;     
    }

    public function preparingUrlForSearchRequestMovies(string $userInput) {
        $url = self::BASIC_URL;
        $endPoint = "/titles/search/title/";
        $exact = "?" . self::EXACT;
        $info = "&" . self::INFO . "base_info";
        $titleType = "&" . self::TITLE_TYPE . "movie";        
        $limit = "&" . self::LIMIT . "30";

        $finalUrl = $url . $endPoint . $userInput . $exact . $titleType . $info . $limit;
        
        return $finalUrl;     
    }

    public function preparingUrlForSearchRequestTvSeries(string $userInput) {
        $url = self::BASIC_URL;
        $endPoint = "/titles/search/title/";
        $exact = "?" . self::EXACT;
        $info = "&" . self::INFO . "base_info";
        $titleType = "&" . self::TITLE_TYPE . "tvSeries";        
        $limit = "&" . self::LIMIT . "15";

        $finalUrl = $url . $endPoint . $userInput . $exact . $titleType . $info . $limit;
        
        return $finalUrl;     
    }

    //DETAILED DESCRIPTION
    public function creatingBasicUrlWithoutOptionalInfoForSingleEntry(string $id) {
        $url = self::BASIC_URL;
        $endPoint = "/titles/";      

        $urlFinal = $url . $endPoint . $id;
        
        return $urlFinal;       
    }
    
    public function creatingBaseInfoUrlForSingleEntry(string $url) {
        $info = "?" . self::INFO . "base_info";
        $urlFinal = $url . $info;
        
        return $urlFinal;       
    }

    public function creatingUrlForExtendedCastForSingleEntry(string $url) {
        $info = "?" . self::INFO . "extendedCast";
        $urlFinal = $url . $info;
        
        return $urlFinal;       
    }

    public function creatingUrlForCreatorsForSingleEntry(string $url) {
        $info = "?" . self::INFO . "creators_directors_writers";
        $urlFinal = $url . $info;
        
        return $urlFinal;       
    }
    
    //UPCOMING TITLES
    public function creatingUrlForUpcomingTitles($stYear, $eYear) {
        $url = "https://moviesdatabase.p.rapidapi.com";
        $endPoint = "/titles/x/upcoming";
        $startYear = "?startYear=" . $stYear;
        $sort = "&sort=year.incr"; 
        $limit = "&limit=5";        
        $endYear = "&endYear=" . $eYear;
        $info = "&info=base_info";         

        $urlFinal = $url . $endPoint . $startYear . $sort . $limit . $endYear . $info;
        
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