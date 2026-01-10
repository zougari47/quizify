"use client"
import { useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "./ui/badge"
import { cn } from "@/lib/utils"

type QuestionCardProps = {
  q: string
  answers: string[]
  cat: string
  difficulty: string
  correct_answer: string
  onAnswer: (answer: string) => void
  onNext: () => void
}

export function QuestionCard({
  q,
  answers,
  cat,
  difficulty,
  correct_answer,
  onAnswer,
  onNext,
}: QuestionCardProps) {
  const [selected, setSelected] = useState<string | null>(null)
  const [locked, setLocked] = useState(false)

  useEffect(() => {
    setLocked(false)
    setSelected(null)
  }, [q])

  return (
    <Card className="w-full max-w-xl mx-auto mt-12 min-h-[600px] flex flex-col">
      <CardHeader>
        {/* NOTE: you should not use dangerouslySetInnerHTML if you don't trust the API !!! */}
        <CardTitle
          className="text-xl"
          dangerouslySetInnerHTML={{ __html: q }}
        />
        <CardDescription className="flex gap-4 mt-4 mb-10">
          <Badge variant="cat" dangerouslySetInnerHTML={{ __html: cat }} />
          <Badge variant={difficulty as "hard" | "medium" | "easy"}>
            {difficulty.toUpperCase()}
          </Badge>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {answers.map((ans) => (
          <Button
            variant="outline"
            size="lg"
            className={cn(
              "text-lg whitespace-normal min-h-10 !h-auto",
              ans === correct_answer && "text-emerald-800 !bg-emerald-200",
              ans === selected &&
                ans !== correct_answer &&
                correct_answer &&
                "text-rose-800 !bg-rose-200"
            )}
            key={ans}
            disabled={locked}
            onClick={() => {
              if (locked) return
              setSelected(ans)
              setLocked(true)
              onAnswer(ans)
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: ans }} />
          </Button>
        ))}
      </CardContent>
      <CardFooter className="mt-auto">
        {selected && correct_answer && (
          <Button onClick={onNext} className="ml-auto font-semibold" size="lg">
            next
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
