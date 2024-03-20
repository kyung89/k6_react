export default function BoxOfficeThead() {
  return (
    <thead>
      <tr className=" h-10
                          text-center
                         bg-blue-900 text-white">
        <th className="w-14">순위</th>
        <th>영화명</th>
        <th className="w-1/5">매출액</th>
        <th className="w-1/5">관객수</th>
        <th className="w-30">증감율</th>
      </tr>
    </thead>
  )
}
