import { FetchBranchData } from "@/api/functions/function";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";



export interface FindPharmacyInterface{
        id: number
        name: string
        code: string
        pharmacyId: number
        email: string
        phone: string
        address: string
        city: string
        country: string
        longitude: any
        latitude: any
        postcode: string
        website: string
        isAvailableForAcceptOrder: boolean
        availabilityStatusBySuperAdmin: any
        superAdminAvailabilityStatusExpiry: any
        ryftAccountId: any
        ryftAccountVerificationStatus: any
        ryftAccountFrozen: boolean
        ryftPayoutMethodId: any
        ryftPayoutMethodStatus: any
        status: string
        createdAt: string
        pendingCount: any
        collectedCount: any
        rejectedCount: any
        pharmacy: Pharmacy
      }
      export interface Pharmacy {
        id: number
        name: string
        logo: any
        collectPaymentForAllBranches: boolean
        allowBranchesForToggleAvailability: boolean
        ryftAccountId: string
        ryftAccountVerificationStatus: string
        ryftAccountFrozen: boolean
        ryftPayoutMethodId: string
        ryftPayoutMethodStatus: string
        status: string
      }
      






export default function BranchDetail() {


    const { data, isLoading, error } = useQuery({
        queryKey: ["branchData"],
        queryFn: () => FetchBranchData()

    });
    console.log("branch Data:", data)

    return (

        <TableContainer  >
            <Table >
                <TableHead >
                    <TableRow >
                        <TableCell sx={{color:"red"}}>BRANCH CODE</TableCell>
                        <TableCell sx={{color:"red"}}>BRANCH NAME</TableCell>
                        <TableCell sx={{color:"red"}}>STATUS</TableCell>
                        <TableCell sx={{color:"red"}}>CITY</TableCell>
                        <TableCell sx={{color:"red"}}>COUNTRY</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data?.map((item:FindPharmacyInterface,key:any)=>(
                            <TableRow key={key.id}>

                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.status}</TableCell>
                                <TableCell>{item.city}</TableCell>
                                <TableCell>{item.country}</TableCell>

                            </TableRow>

                        ))
                    }
                   
                </TableBody>

            </Table>
        </TableContainer>

    )

   

}