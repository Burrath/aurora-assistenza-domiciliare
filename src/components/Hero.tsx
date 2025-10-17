import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Clock, Users } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950/20 dark:to-purple-950/20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Assistenza Domiciliare{" "}
                <span className="text-primary">Anziani</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                La gestione di un anziano a domicilio è il compito più difficile che possa capitare. 
                Noi di Aurora vogliamo essere il tuo punto di riferimento concreto.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Vogliamo essere sempre presenti per qualsiasi emergenza, occupandoci delle sue esigenze primarie
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Non vogliamo portarlo in una casa di riposo ma vogliamo che continui a vivere nella sua abitazione
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Scopri i nostri servizi
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Chiama Ora
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">Team Specializzato</h3>
                <p className="text-xs text-muted-foreground">Assistenti qualificate</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">Disponibilità</h3>
                <p className="text-xs text-muted-foreground">24 ore su 24</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">Dignità</h3>
                <p className="text-xs text-muted-foreground">Rispetto e cura</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="h-24 w-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Assistenza Domiciliare</h3>
                <p className="text-muted-foreground">Con amore e professionalità</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
