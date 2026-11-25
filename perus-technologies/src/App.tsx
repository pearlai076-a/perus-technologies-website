import { type ReactNode } from 'react';
import { ClerkProvider, SignIn, SignUp } from '@clerk/react';
import { publishableKeyFromHost } from '@clerk/react/internal';
import { shadcn } from '@clerk/themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import AdminPage from '@/pages/Admin';
import { AboutPage, AnnouncementsPage, ContactPage, DownloadsPage, HomePage, InnovationPage, OffersPage, ProductPage, ProductsPage } from '@/pages/Site';
import NotFound from '@/pages/not-found';
import { Link, Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient({defaultOptions:{queries:{retry:1,refetchOnWindowFocus:false}}});
const clerkPubKey = publishableKeyFromHost(window.location.hostname, import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);
const clerkProxyUrl = import.meta.env.VITE_CLERK_PROXY_URL;
const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
function stripBase(path:string){return basePath&&path.startsWith(basePath)?path.slice(basePath.length)||'/':path}
if (!clerkPubKey) throw new Error('Missing VITE_CLERK_PUBLISHABLE_KEY in .env file');

const clerkAppearance = {
  theme:shadcn, cssLayerName:'clerk',
  options:{logoPlacement:'inside' as const,logoLinkUrl:basePath||'/',logoImageUrl:`${window.location.origin}${basePath}/logo.svg`},
  variables:{colorPrimary:'#d6b46b',colorForeground:'#f4f3ef',colorMutedForeground:'#a5a6ad',colorDanger:'#e77768',colorBackground:'#111318',colorInput:'#0d0f13',colorInputForeground:'#f4f3ef',colorNeutral:'#f4f3ef',fontFamily:'DM Sans, sans-serif',borderRadius:'4px'},
  elements:{
    rootBox:'w-full flex justify-center',cardBox:'bg-[#111318] rounded-md w-[440px] max-w-full overflow-hidden border border-white/10',
    card:'!shadow-none !border-0 !bg-transparent !rounded-none',footer:'!shadow-none !border-0 !bg-transparent !rounded-none',
    headerTitle:'text-[#f4f3ef] font-display',headerSubtitle:'text-[#a5a6ad]',socialButtonsBlockButtonText:'text-[#f4f3ef]',
    formFieldLabel:'text-[#c7c7ca]',footerActionLink:'text-[#f0d99f]',footerActionText:'text-[#a5a6ad]',dividerText:'text-[#92949c]',
    identityPreviewEditButton:'text-[#f0d99f]',formFieldSuccessText:'text-[#d6b46b]',alertText:'text-[#f4f3ef]',
    logoBox:'rounded-full border border-[#d6b46b]/50',logoImage:'rounded-full',socialButtonsBlockButton:'border-white/15 bg-[#0d0f13]',
    formButtonPrimary:'bg-[#d6b46b] text-[#111] hover:bg-[#f0d99f]',formFieldInput:'border-white/15 bg-[#0d0f13] text-[#f4f3ef]',
    footerAction:'text-[#a5a6ad]',dividerLine:'bg-white/10',alert:'border-white/10 bg-[#171a20]',
    otpCodeFieldInput:'border-white/15 bg-[#0d0f13] text-[#f4f3ef]',formFieldRow:'text-[#f4f3ef]',main:'text-[#f4f3ef]'
  }
};
function SignInPage(){return <AuthFrame><SignIn routing="path" path={`${basePath}/sign-in`} signUpUrl={`${basePath}/sign-up`}/></AuthFrame>}
function SignUpPage(){return <AuthFrame><SignUp routing="path" path={`${basePath}/sign-up`} signInUrl={`${basePath}/sign-in`}/></AuthFrame>}
function AuthFrame({children}:{children:ReactNode}){return <div className="hero-bg flex min-h-[100dvh] flex-col items-center justify-center gap-8 px-4 py-10"><Link href="/" className="brand"><span className="brand-mark">P</span><span>PERUS <b className="gold">TECHNOLOGIES</b></span></Link>{children}<p className="max-w-md text-center text-xs leading-6 text-[#858790]">Technology. Intelligence. Innovation.</p></div>}
function RoutedErrorBoundary({children}:{children:ReactNode}){const [location]=useLocation();return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>}
function RouterContent(){return <RoutedErrorBoundary><Switch>
  <Route path="/" component={HomePage}/>
  <Route path="/about" component={AboutPage}/>
  <Route path="/products" component={ProductsPage}/>
  <Route path="/products/:slug" component={ProductPage}/>
  <Route path="/innovation" component={InnovationPage}/>
  <Route path="/offers" component={OffersPage}/>
  <Route path="/downloads" component={DownloadsPage}/>
  <Route path="/announcements" component={AnnouncementsPage}/>
  <Route path="/contact" component={ContactPage}/>
  <Route path="/sign-in/*?" component={SignInPage}/>
  <Route path="/sign-up/*?" component={SignUpPage}/>
  <Route path="/admin/*?" component={AdminPage}/>
  <Route component={NotFound}/>
</Switch></RoutedErrorBoundary>}
function ClerkRoutes(){const [,setLocation]=useLocation();return <ClerkProvider publishableKey={clerkPubKey} proxyUrl={clerkProxyUrl} appearance={clerkAppearance} signInUrl={`${basePath}/sign-in`} signUpUrl={`${basePath}/sign-up`} localization={{signIn:{start:{title:'Welcome back',subtitle:'Sign in to your PERUS account'}},signUp:{start:{title:'Create your account',subtitle:'Join the PERUS TECHNOLOGIES community'}}}} routerPush={to=>setLocation(stripBase(to))} routerReplace={to=>setLocation(stripBase(to),{replace:true})}><QueryClientProvider client={queryClient}><TooltipProvider><RouterContent/><Toaster/></TooltipProvider></QueryClientProvider></ClerkProvider>}
function App(){return <WouterRouter base={basePath}><ClerkRoutes/></WouterRouter>}
export default App;
