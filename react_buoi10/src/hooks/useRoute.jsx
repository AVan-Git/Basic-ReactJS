import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

export default function useRoute() {

    const navigate = useNavigate();
    const params = useParams()
    const [searchParams, setSearchParams] = useSearchParams();

  return {navigate, params, searchParams:[searchParams, setSearchParams] }
}
