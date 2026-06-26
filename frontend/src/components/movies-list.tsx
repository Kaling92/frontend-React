import { useEffect, useState, type ChangeEvent } from "react";
import { MovieDataService } from " .. /services/movies";
import { Link } from "react-router-dom";

type MovieListItem = {
    _id: string;
    title: string;
    rated?: string;
    poster?: string;
    plot?: string;
};

type MoviesResponse = {
    movies: MovieListItem[];
    page: number;
    entries_per_page: number;
};

type AppliedSearch =
    | { mode: ""; title: ""; rating: "" }
    | { mode: "findByTitle"; title: string; rating: "" }
    | { mode: "findByRating"; title: ""; rating: string };

const MoviesList = () => {
    const [movies, setMovies] = useState<MovieListItem[]>([]);
    const [searchTitle, setSearchTitle] = useState<string>("");
    const [searchRating, setSearchRating] = useState<string>("All Ratings");
    const [ratings, setRatings] = useState<string[]>(["All Ratings"]);

    const [currentPage, setCurrentPage] = useState<number>(0);
    const [entriesPerPage, setEntriesPerPage] = useState<number>(0);
    const [appliedSearch, setAppliedSearch] = useState<AppliedSearch>({
        mode: "",
        title: "",
        rating: "",
    });

    const retrieveMovies = async (page: number) => {
try {
const response = await MovieDataService.getAll(page);
const data = response.data as MoviesResponse;
}
setMovies(data.movies);
setCurrentPage(data.page);
setEntriesPerPage(data.entries_per_page);
catch (e) {
    console.error(e);
}
};

const retrieveRatings = async () => {
try {
const response = await MovieDataService.getRating();

setRatings(["All Ratings", ... response.data]);
} catch (e) {
console.error(e);
}},

}

