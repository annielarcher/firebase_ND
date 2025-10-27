import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/logo';
import { Gamepad2, Users, Target } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <Logo className="h-6 w-6" />
          <span className="sr-only">Nota Dentro</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Sobre Nós
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Como Funciona
          </Link>
          <Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            App
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Aprenda música de forma divertida e gamificada
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Nota Dentro é a plataforma perfeita para você iniciar sua jornada no mundo da música.
                  </p>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Acesse sua conta</CardTitle>
                  <CardDescription>Entre com seu email para continuar sua jornada musical.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" required />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full">
                    Entrar
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Sobre Nós</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Nossa Missão</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nossa missão é tornar o aprendizado de música acessível, divertido e eficaz para todos. Acreditamos que a música tem o poder de transformar vidas e queremos que todos tenham a oportunidade de experimentar essa magia.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col items-center text-center">
                    <Users className="h-12 w-12 text-primary" />
                    <h3 className="mt-4 text-xl font-bold font-headline">Comunidade</h3>
                    <p className="mt-2 text-muted-foreground">Junte-se a uma comunidade de amantes da música.</p>
                </div>
                 <div className="flex flex-col items-center text-center">
                    <Gamepad2 className="h-12 w-12 text-primary" />
                    <h3 className="mt-4 text-xl font-bold font-headline">Gamificação</h3>
                    <p className="mt-2 text-muted-foreground">Aprenda jogando com nossas lições interativas.</p>
                </div>
                 <div className="flex flex-col items-center text-center">
                    <Target className="h-12 w-12 text-primary" />
                    <h3 className="mt-4 text-xl font-bold font-headline">Foco no Progresso</h3>
                    <p className="mt-2 text-muted-foreground">Acompanhe sua evolução e atinja seus objetivos.</p>
                </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Como Funciona</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                É simples e divertido. Siga estes passos para começar a aprender.
              </p>
            </div>
            <div className="mx-auto w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12">
              <div className="flex flex-col gap-2 items-center">
                <div className="flex items-center justify-center rounded-full bg-primary text-primary-foreground h-16 w-16 text-2xl font-bold">1</div>
                <h3 className="text-lg font-bold font-headline">Crie sua conta</h3>
                <p className="text-sm text-muted-foreground">Cadastre-se rapidamente para começar.</p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className="flex items-center justify-center rounded-full bg-primary text-primary-foreground h-16 w-16 text-2xl font-bold">2</div>
                <h3 className="text-lg font-bold font-headline">Escolha uma lição</h3>
                <p className="text-sm text-muted-foreground">Navegue por nossas lições e comece por onde quiser.</p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className="flex items-center justify-center rounded-full bg-primary text-primary-foreground h-16 w-16 text-2xl font-bold">3</div>
                <h3 className="text-lg font-bold font-headline">Pratique e evolua</h3>
                <p className="text-sm text-muted-foreground">Complete os desafios, ganhe pontos e suba de nível.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Nota Dentro. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Termos de Serviço
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  );
}
