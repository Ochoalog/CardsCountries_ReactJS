import Item from './Item'

export default function Country({ 
  children: country = null,
  onCountryClick = null,
  isVisited = false
}) {
  if(!country) {
    return <div>Impossivel renderizar o país</div>
  }

  function handleCountryClick() {
    if(onCountryClick) {
      onCountryClick(country.id)
    }
  }

  const {flag, name, capital, region, population, area } = country;

  const demographDensity = population / area;

  const isVisitedClassName = isVisited ? 'bg-green-100' : '';

  return (
    <div className={`border p-2 m-2 flex flex-rol items-center space-x-2 ${isVisitedClassName} cursor-pointer`} onClick={handleCountryClick}>
      <img className="w-48" src={flag} alt={name}/>
      <ul>
        <li>
          <Item label="País:">{name}</Item>
        </li>
        <li>
          <Item label="Capital:">{capital}</Item>
        </li>
        <li>
          <Item label="Região:">{region}</Item>
        </li>
        <li>
          <Item label="População:">{population}</Item>
        </li>
        <li>
          <Item label="Área:">{area}</Item>
        </li>
        <li>
          <Item label="Densidade Demográfica:">{demographDensity}</Item>
        </li>   
      </ul>
    </div>
  )
}
