
export const GifItem = ({title,url}) => {
  return (
    <>
        <div className="card">
            <img src={url}></img>
            <p>{title?title:"	༼つಠ益ಠ༽つ ─=≡ΣO))"}</p>
        </div>
    </>
  )
}
