import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero.png";

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950/20 dark:to-purple-950/20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Assistenza Domiciliare, ambulanze,{" "}
                <span className="text-primary">Patronato&CAF</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Noi di Aurora siamo il tuo punto di riferimento concreto per l'assistenza di chi ne ha più bisogno
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Siamo sempre presenti per qualsiasi emergenza, occupandoci delle vostre esigenze primarie
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Garantiamo una vita dignitosa e sicura a chi decide di continuare a vivere nella sua abitazione
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <a href="tel:+393484191693">
                  Chiama Ora
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/393484191693">
                  WhatsApp
                </a>
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
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Assistenza Domiciliare Aurora" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
