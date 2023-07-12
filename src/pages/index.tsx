import { Alert, Button, Spinner } from 'react-bootstrap'
import { useQuery, useLazyQuery, DocumentNode } from "@apollo/client";

import { HumanDocument, HumanQuery, HumanQueryVariables } from '../__generated__/graphql';

import { gql } from '../__generated__/gql';

export default function Home() {


  const [runQuery, { called, loading, data, error }] = useLazyQuery<HumanQuery, HumanQueryVariables>(HumanDocument)


  if (error) return <div>{error.message}</div>
  if (loading) return <Spinner />
  console.log(data)
  if (data?.human) return (
    <>
      <h3>{data.human.name}</h3>
      <h5>Planet: {data.human.homePlanet}</h5>

  </>
  )


  return (
    <>
      <Button variant="primary" onClick={() => runQuery({ variables: { id: "123" } })}>Primary</Button>{' '}
    </>
  );
}
