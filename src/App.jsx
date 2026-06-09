import './App.css'
import MovieCard from './MovieCard'

const movies = [
  { id: 1, title: "Disclosure Day", genre: "Action / Mystery", releaseDate: "June 12, 2026", description: "A Spielberg sci-fi thriller starring Emily Blunt, Josh O'Connor, and Colin Firth." },
  { id: 2, title: "Toy Story 5", genre: "Animation / Comedy", releaseDate: "June 19, 2026", description: "Buzz and Woody return in a brand new adventure featuring Tom Hanks and Keanu Reeves." },
  { id: 3, title: "The Death of Robin Hood", genre: "Action / Adventure", releaseDate: "June 19, 2026", description: "Hugh Jackman and Jodie Comer star in a bold retelling of the Robin Hood legend." },
  { id: 4, title: "Supergirl", genre: "Superhero", releaseDate: "June 26, 2026", description: "The Girl of Steel makes her big screen debut in this DC superhero adventure." },
  { id: 5, title: "Stop! That! Train!", genre: "Action / Comedy", releaseDate: "June 12, 2026", description: "A wild action comedy starring Paul Scheer and Joel McHale." },
  { id: 6, title: "Time of Death", genre: "Horror / Thriller", releaseDate: "June 12, 2026", description: "A chilling mystery thriller starring Michael Kelly, Dennis Haysbert, and Mena Suvari." },
  { id: 7, title: "The Furious", genre: "Action / Crime", releaseDate: "June 12, 2026", description: "A high-octane action crime thriller starring Joe Taslim and Brian Le." },
  { id: 8, title: "Night Nurse", genre: "Thriller", releaseDate: "June 10, 2026", description: "A gripping thriller starring Cemre Paksoy and Bruce McKenzie." },
  { id: 9, title: "Girls Like Girls", genre: "Drama", releaseDate: "June 19, 2026", description: "A heartfelt drama starring Zach Braff and Levon Hawke." },
  { id: 10, title: "This Tempting Madness", genre: "Thriller", releaseDate: "June 12, 2026", description: "A seductive thriller starring Simone Ashley and Austin Stowell." },
]

function App() {
  return (
    <div className="app">
      <h1 className="title">🎬 Upcoming Movies 2025</h1>
      <div className="card-grid">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            genre={movie.genre}
            releaseDate={movie.releaseDate}
            description={movie.description}
          />
        ))}
      </div>
    </div>
  )
}

export default App

