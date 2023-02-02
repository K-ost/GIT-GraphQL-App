import { useState } from "react"

interface ISearch {
  handler: (e: any, value: string) => void
}

const Search: React.FC<ISearch> = ({ handler }) => {
  const [value, setValue] = useState<string>('')  

  return (
    <div className="pt-4 pb-4">
      <form action="#" onSubmit={e => handler(e, value)}>
        <div className="d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Enter GitHub user"
            onChange={e => setValue(e.target.value)}
          />
          <button type="submit" className="btn btn-outline-primary">Search</button>
        </div>
      </form>
    </div>
  )
}

export default Search