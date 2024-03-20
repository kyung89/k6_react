export default function MyDiv3(probs) {
  return (
    <div className="w-4/5 h-2/3
                    flex justify-center items-start
                    bg-lime-500
                    text-lime-50
                    ">
      <p className="w-4/5 
                    flex justify-start
                    font-bold text-2xl
                    m-5
                    ">
        {`${probs.d11} > ${probs.d21} > ${probs.d31}`}
      </p>

    </div>
  )
}
