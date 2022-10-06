import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Sodas() {
  const data = [
    {
      id: 1,
      snack: 'sodas',
      name: 'Coca Cola',
      description: 'Gelada e sem comentários.',
      price: 5.9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPM4vdJlcnJv2za43ThYD3eSzyINtVgiq0QQ&usqp=CAU',
    },
    {
      id: 2,
      snack: 'sodas',
      name: 'Fanta',
      description: 'O verdadeiro sabor da laranja',
      price: 7.9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV7vkoePE4zarHQx7AOuTcFpAmisCN8eDscw&usqp=CAU',
    },
    {
      id: 3,
      snack: 'sodas',
      name: 'Guaraná Jesus',
      description: 'O melhor',
      price: 23.5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPKq5udpivJ7BY5SsV2pg1aRMqt7IxQ9dFCw&usqp=CAU',
    },
    {
      id: 4,
      snack: 'sodas',
      name: 'Guaraná Antartica',
      description: 'Abra sua Guaraná com pipoca.',
      price: 15.5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbcrYMqj65x6BSZMDHyZL-3zkq63LURBJdTg&usqp=CAU',
    },

  ]


  return (
    <>
    <Head title='Refrigerantes'/>
    <SnackTitle>Refrigerantes</SnackTitle>
    <Snacks snacks={data} />
    </>
  )
}
