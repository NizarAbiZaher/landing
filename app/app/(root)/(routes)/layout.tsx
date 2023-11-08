import Main from "@/components/main"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const RootLayout = async ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <Navbar />
            <main>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
                
            </main>
            
        </div>
        
    )
}

export default RootLayout