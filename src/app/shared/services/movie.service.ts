import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWM3M2M0Y2JmYmEzNjMwNjJmNDkzN2Y1MjNkNWM3YyIsInN1YiI6IjY2MTM3NjE3OTQwOGVjMDE3ZDJhYmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5aJ7oYH9NZaCAvgUZoHteK-KNvPvcw9C-B47b29iTIg'
  }
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  http = inject(HttpClient);

  getMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', options);
  }

  getTvShows() {
    return this.http.get<any>('https://api.themoviedb.org/3/discover/tv', options);
  }

  getRatedMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies', options);
  }

  getBannerImage(id: number) {
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/images`,options);
  }

  getBannerVideo(id: number) {
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/videos`,options);
  }

  getBannerDetail(id: number) {
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/now_playing', options);
  }

  getPopularMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/popular', options);
  }

  getTopRated() {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/top_rated', options);
  }

  getUpcomingMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/upcoming', options);
  }

  getLatestMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/latest', options);
  }

  getTrendingMovies() {
    // The trending endpoint might need a specific time window
    // Example for weekly trending:
    return this.http.get<any>('https://api.themoviedb.org/3/trending/movie/week', options);
  }
}