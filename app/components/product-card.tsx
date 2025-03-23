import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/card"
import { Button } from "@/app/components/button"
import Image from "next/image"

interface ProductCardProps {
  name: string
  description: string
  imageUrl: string
}

export function ProductCard({ name, description, imageUrl }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image src={imageUrl || "/logo.png"} alt={name} layout="fill" objectFit="fill" />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-bold text-rojoprincipal">{name}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-rojoprincipal hover:bg-rojosecundario">Ver detalles</Button>
      </CardFooter>
    </Card>
  )
}

