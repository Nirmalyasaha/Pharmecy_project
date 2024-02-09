import { FetchBranchData } from "@/api/functions/function";
import React from "react";
import { useQuery } from "react-query";



interface FindPharmacyInterface{
    page:number,
    length:number,
    sortBy: string;
    sortOrder: string;
}


const [pharmecy, SetPharmecy] = React.useState<FindPharmacyInterface>({   

    "page": 1,
    "length": 50,
    // "seacrh":,
    "sortBy": "id",
    "sortOrder":"DESC"

})


export default function BranchDetail() {


    const { data, isLoading, error } = useQuery({
        queryKey: ["branchData"],
        //queryFn: () => FetchBranchData<FindPharmacyInterface>(pharmecy)

    });
    console.log("branch Data:", data)


}