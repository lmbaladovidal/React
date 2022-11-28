import { useCounter,useFetch } from "../hooks";
import { LoadingQuote,Quote } from "../03-Examples/";

export const Layout = () => {
    const {counter,increment} = useCounter()
    const {data, isLoading, hasError} = useFetch('https://www.breakingbadapi.com/api/quotes/'+counter);
    const {quote, author} = !!data && data[0];
    const onIncriment = ()=>{increment(1)}
  return (
    <>
        <h1>BreakinBad Quotes</h1>
        {isLoading
            ?<LoadingQuote/>
            :<Quote quote={quote} author={author}/>
        }
        <button 
            className="btn btn-primary"
            disabled={isLoading}
            onClick={onIncriment}>
            Next Quote</button>
       <hr /> 
    </>
  )
}
