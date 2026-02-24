import React, { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Stack,
  Grid,
  Typography,
  Button,
  Paper,
  Chip,
  Divider,
  Card,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SettingsIcon from "@mui/icons-material/Settings";
import TimelineIcon from "@mui/icons-material/Timeline";
import SecurityIcon from "@mui/icons-material/Security";
import GroupsIcon from "@mui/icons-material/Groups";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import BoltIcon from "@mui/icons-material/Bolt";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/material/IconButton";
import { useThemeMode, THEME_MODES } from "@/app/providers";
import { reportConversion } from "@/shared/utils/gtagConversion";
import logoWhite from "@/shared/assets/logo-white.png";

const HERO_TITLE_WORDS = "Software sob medida com foco em resultado".split(" ");
const WHATSAPP = {
  number: "+55 11 97961-8229",
  link: "https://wa.me/5511979618229",
  message: "Olá! Acessei o site da Nullory e gostaria de tirar minha ideia do papel. Pode me contar como funciona?",
  messageMVP: "Olá! Tenho interesse no MVP Ágil para validar minha ideia rápido. Pode me contar como funciona?",
  messageProposta:
    "Olá! Gostaria de solicitar uma proposta para desenvolvimento completo do meu projeto. Pode me retornar?",
  messageProjetoCompleto:
    "Olá! Gostaria de saber mais sobre o desenvolvimento completo de projeto. Pode me retornar?",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { delay: i * 0.06, duration: 0.4 },
  }),
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" },
  }),
};

function AnimatedSection({ children, reducedMotion, ...boxProps }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px", amount: 0.1 });
  const visible = reducedMotion ? true : inView;
  return (
    <Box ref={ref} {...boxProps}>
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 32 }}
        animate={
          reducedMotion
            ? { opacity: 1, y: 0 }
            : visible
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 32 }
        }
        transition={{ duration: reducedMotion ? 0 : 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    </Box>
  );
}


const Anchor = ({ id }) => (
  <Box id={id} sx={{ position: "relative", top: -88, visibility: "hidden" }} />
);

const Bullet = ({ children }) => (
  <Stack direction="row" spacing={1} alignItems="center">
    <CheckCircleIcon fontSize="small" color="secondary" />
    <Typography variant="body2">{children}</Typography>
  </Stack>
);

const SectionTitle = ({ title, subtitle, reducedMotion }) => (
  <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
    <Typography sx={{ fontSize: { xs: 26, md: 34 }, fontWeight: 800 }}>{title}</Typography>
    <Box
      component={reducedMotion ? "div" : motion.div}
      {...(reducedMotion ? {} : {
        initial: { scaleX: 0 },
        whileInView: { scaleX: 1 },
        viewport: { once: true },
        transition: { duration: 0.5, ease: "easeOut" },
      })}
      sx={{
        width: 64,
        height: 4,
        mx: "auto",
        mt: 1.5,
        mb: 1,
        borderRadius: 2,
        background: "linear-gradient(90deg, #2563EB, #00B3FF, #8B5CF6)",
        transformOrigin: "center",
      }}
    />
    {subtitle && (
      <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
        {subtitle}
      </Typography>
    )}
  </Box>
);

function PortfolioCard({ title, desc, chips = [], index = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={scaleIn}
      custom={index}
    >
      <Card
        component={motion.div}
        variant="outlined"
        sx={{
          height: "100%",
          borderRadius: "4px",
          overflow: "hidden",
          borderColor: "rgba(255,255,255,0.06)",
        }}
        whileHover={{ y: -4, boxShadow: "0 16px 32px -10px rgba(124, 58, 237, 0.3)", transition: { duration: 0.05 } }}
      >
        <CardContent>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
            <Typography variant="h6" fontWeight={700}>{title}</Typography>
            <Chip size="small" label="Produção" icon={<SecurityIcon fontSize="small" />} variant="outlined" />
          </Stack>
          <Typography variant="body2" color="text.secondary">{desc}</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
            {chips.map((c) => (
              <Chip key={c} size="small" label={c} variant="outlined" />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function NulloryLanding() {
  const { mode, setMode } = useThemeMode();
  const reducedMotion = useReducedMotion();
  const { scrollYProgress, scrollY } = useScroll();
  const [navScrolled, setNavScrolled] = useState(false);
  const isDark = mode === THEME_MODES.DARK;
  const navBg = useTransform(
    scrollY,
    [0, 80],
    isDark
      ? ["rgba(5, 7, 13, 0.85)", "rgba(5, 7, 13, 0.97)"]
      : ["rgba(212, 220, 230, 0.92)", "rgba(212, 220, 230, 0.98)"]
  );
  const navShadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 transparent", "0 4px 20px rgba(0,0,0,0.25)"]
  );

  React.useEffect(() => {
    const unsub = scrollY.on("change", (v) => setNavScrolled(v > 60));
    return () => unsub();
  }, [scrollY]);

  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0.3]);
  const [showBackToTop, setShowBackToTop] = useState(false);
  React.useEffect(() => {
    const unsub = scrollY.on("change", (v) => setShowBackToTop(v > 400));
    return () => unsub();
  }, [scrollY]);

  const compareRows = [
    { a: "Prazo", b: "Até 20-30 dias", c: "Sob cronograma (médio/longo)" },
    { a: "Escopo", b: "Essencial p/ validação", c: "Completo, integrações e escala" },
    { a: "Interface", b: "Simples e moderna", c: "Personalização avançada" },
    { a: "Preço", b: "A partir de R$ 2.000", c: "Sob consulta" },
  ];

  return (
    <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reducedMotion ? 0 : 0.6 }} sx={{ position: "relative", minHeight: "100%" }}>
      {/* Fundo com gradiente + orbs em toda a tela */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          background: (theme) =>
            theme.palette.gradient?.hero ??
            (isDark
              ? "linear-gradient(180deg, rgba(17, 24, 39, 0.92) 0%, rgba(5, 7, 13, 1) 50%)"
              : "linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)"),
          "@keyframes floatOrb": {
            "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: 0.6 },
            "50%": { transform: "translate(15px, -20px) scale(1.1)", opacity: 0.9 },
          },
          "@keyframes floatOrb2": {
            "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: 0.5 },
            "50%": { transform: "translate(-10px, 15px) scale(1.05)", opacity: 0.8 },
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: "-50%",
            right: "-20%",
            width: "70%",
            height: "140%",
            background:
              "radial-gradient(ellipse at center, rgba(124, 58, 237, 0.12) 0%, rgba(0, 179, 255, 0.06) 50%, transparent 70%)",
            pointerEvents: "none",
            animation: "floatOrb 12s ease-in-out infinite",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-30%",
            left: "-20%",
            width: "60%",
            height: "100%",
            background:
              "radial-gradient(ellipse at center, rgba(0, 179, 255, 0.08) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 60%)",
            pointerEvents: "none",
            animation: "floatOrb2 14s ease-in-out infinite",
          },
        }}
      />
      {!reducedMotion && (
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "linear-gradient(90deg, #2563EB, #00B3FF, #8B5CF6)",
            transformOrigin: "0%",
            scaleX: scrollYProgress,
            zIndex: 9999,
          }}
        />
      )}

      <AppBar
        component={motion.header}
        position="sticky"
        color="inherit"
        elevation={0}
        style={{
          backgroundColor: navBg,
          boxShadow: navShadow,
        }}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backdropFilter: "saturate(180%) blur(12px)",
        }}
      >
        <Toolbar>
          <Box
            component="a"
            href="#"
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              textDecoration: "none",
              "& .logo-neon": {
                height: 48,
                ...(isDark && {
                  filter: "drop-shadow(0 0 4px rgba(0, 179, 255, 0.3)) drop-shadow(0 0 8px rgba(139, 92, 246, 0.2))",
                }),
                ...(!isDark && { filter: "brightness(0) opacity(0.85)" }),
                ...(!reducedMotion && isDark && {
                  animation: "logoNeon 3s ease-in-out infinite",
                }),
              },
              "@keyframes logoNeon": {
                "0%, 100%": {
                  filter: "drop-shadow(0 0 4px rgba(0, 179, 255, 0.3)) drop-shadow(0 0 8px rgba(139, 92, 246, 0.2))",
                },
                "50%": {
                  filter: "drop-shadow(0 0 8px rgba(0, 179, 255, 0.45)) drop-shadow(0 0 12px rgba(139, 92, 246, 0.35))",
                },
              },
            }}
          >
            <Box component="img" src={logoWhite} alt="Nullory" className="logo-neon" />
          </Box>
          <IconButton
            onClick={() => setMode(isDark ? THEME_MODES.LIGHT : THEME_MODES.DARK)}
            color="inherit"
            aria-label={isDark ? "Tema claro" : "Tema escuro"}
            sx={{ mr: 1 }}
          >
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <Stack direction="row" spacing={{ xs: 1, md: 2 }} sx={{ display: { xs: "none", md: "flex" } }}>
            <Button href="#portfolio" color="inherit" component={motion.a} whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>Portfólio</Button>
            <Button href="#services" color="inherit" component={motion.a} whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>Serviços</Button>
            <Button href="#agile-mvp" color="inherit" component={motion.a} whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>MVP Ágil</Button>
            <Button
              href={`${WHATSAPP.link}?text=${encodeURIComponent(WHATSAPP.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              component={motion.a}
              whileHover={{ scale: 1.03, boxShadow: "0 12px 40px -8px rgba(124, 58, 237, 0.5)", transition: { duration: 0.05 } }}
              whileTap={{ scale: 0.98 }}
              onClick={() => reportConversion()}
            >
              Fale com a gente
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box
        ref={heroRef}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        sx={{
          py: { xs: 6, md: 10 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {!reducedMotion && (
          <motion.div
            style={{
              position: "absolute",
              top: "-20%",
              right: "-10%",
              width: "50%",
              height: "120%",
              background: "radial-gradient(ellipse at center, rgba(124, 58, 237, 0.15) 0%, transparent 60%)",
              pointerEvents: "none",
              zIndex: 0,
              y: heroY,
              opacity: heroOpacity,
            }}
          />
        )}
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center" component={motion.div} variants={staggerContainer} initial="hidden" animate="visible">
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <motion.div variants={fadeInUp} custom={0}>
                  <Chip icon={<BoltIcon />} label="Entregas rápidas, sem enrolação" sx={{ mb: 0 }} color="secondary" variant="outlined" />
                </motion.div>
                <Box
                  component={motion.div}
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  sx={{
                    fontSize: { xs: 34, md: 48 },
                    lineHeight: 1.2,
                    fontWeight: 900,
                    mb: 1,
                    "& .hero-word": {
                      display: "inline-block",
                      marginRight: "0.2em",
                      ...(!reducedMotion && {
                        background: isDark
                          ? "linear-gradient(90deg, #fff 0%, #00B3FF 22%, #8B5CF6 48%, #00B3FF 74%, #fff 100%)"
                          : "linear-gradient(90deg, #0F172A 0%, #0284C7 22%, #7C3AED 48%, #0284C7 74%, #0F172A 100%)",
                        backgroundSize: "200% auto",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                        animation: "gradientShine 5s ease-in-out infinite",
                      }),
                    },
                    "@keyframes gradientShine": {
                      "0%": { backgroundPosition: "0% center" },
                      "100%": { backgroundPosition: "200% center" },
                    },
                  }}
                >
                  {HERO_TITLE_WORDS.map((word, i) => (
                    <motion.span
                      key={i}
                      className="hero-word"
                      variants={fadeInUp}
                      custom={i}
                    >
                      {word}{" "}
                    </motion.span>
                  ))}
                </Box>
                <motion.div variants={fadeInUp} custom={1.5}>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { xs: 20, md: 26 },
                      fontWeight: 800,
                      letterSpacing: "0.03em",
                      mb: 1.5,
                      ...(!reducedMotion && {
                        background: isDark
                          ? "linear-gradient(90deg, #fff 0%, #00B3FF 35%, #8B5CF6 65%, #00B3FF 100%)"
                          : "linear-gradient(90deg, #0F172A 0%, #0284C7 35%, #7C3AED 65%, #0284C7 100%)",
                        backgroundSize: "200% auto",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                        animation: "gradientShine 5s ease-in-out infinite",
                      }),
                      ...(reducedMotion && { color: "primary.main" }),
                    }}
                  >
                    Partimos do zero. Entregamos valor.
                  </Typography>
                </motion.div>
                <motion.div variants={fadeInUp} custom={2}>
                  <Typography sx={{ color: "text.secondary", fontSize: { xs: 16, md: 18 } }}>
                    Tiramos sua ideia do papel em dias, não meses. MVP Ágil para validar rápido e
                    desenvolvimento completo para escalar com segurança.
                  </Typography>
                </motion.div>
                <motion.div variants={fadeInUp} custom={3}>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 1 }}>
                    <Button
                      href={`${WHATSAPP.link}?text=${encodeURIComponent(WHATSAPP.messageMVP)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="large"
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      component={motion.a}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => reportConversion()}
                    >
                      Quero um MVP Ágil
                    </Button>
                    <Button
                      href={`${WHATSAPP.link}?text=${encodeURIComponent(WHATSAPP.messageProjetoCompleto)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="large"
                      variant="outlined"
                      endIcon={<ArrowForwardIcon />}
                      component={motion.a}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => reportConversion()}
                    >
                      Projeto completo
                    </Button>
                  </Stack>
                </motion.div>
                <Grid container spacing={1.5} sx={{ mt: 1 }} component={motion.div} variants={staggerContainer}>
                  {["Prazo objetivo", "Arquitetura escalável", "UI moderna", "Suporte próximo"].map((t, idx) => (
                    <Grid key={t} item xs={12} sm={6} component={motion.div} variants={fadeInUp} custom={4 + idx * 0.5}>
                      <Bullet>{t}</Bullet>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} component={motion.div} variants={staggerContainer}>
              <Grid container spacing={2}>
                {[
                  { i: <StorefrontIcon fontSize="small" color="secondary" />, t: "Front-end", s: "React, Next.js, MUI" },
                  { i: <SettingsIcon fontSize="small" color="secondary" />, t: "Back-end", s: "Django, FastAPI, Node" },
                  { i: <LeaderboardIcon fontSize="small" color="secondary" />, t: "Dados", s: "PostgreSQL, ClickHouse, Redis" },
                  { i: <CloudDownloadIcon fontSize="small" color="secondary" />, t: "DevOps", s: "Docker, CI/CD, Cloud" },
                ].map(({ i, t, s }, idx) => (
                  <Grid key={t} item xs={12} sm={6} component={motion.div} variants={scaleIn} custom={idx}>
                    <Paper
                      component={motion.div}
                      variant="outlined"
                      sx={{ p: 2.5, height: "100%", borderRadius: "4px" }}
                      whileHover={{ y: -4, boxShadow: "0 12px 28px -8px rgba(124, 58, 237, 0.25)", transition: { duration: 0.05 } }}
                    >
                      <Stack direction="row" spacing={1} alignItems="center">
                        {i}
                        <Typography fontWeight={700}>{t}</Typography>
                      </Stack>
                      <Typography variant="caption" color="text.secondary">
                        {s}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
                <Grid item xs={12} component={motion.div} variants={scaleIn} custom={4}>
                  <Paper
                    component={motion.div}
                    variant="outlined"
                    sx={{ p: 2.5, borderRadius: "4px" }}
                    whileHover={{ y: -4, boxShadow: "0 12px 28px -8px rgba(124, 58, 237, 0.25)", transition: { duration: 0.05 } }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <AutoAwesomeIcon fontSize="small" color="secondary" />
                      <Typography fontWeight={700}>IA</Typography>
                    </Stack>
                    <Typography variant="caption" color="text.secondary">
                      Inteligência artificial integrada
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <AnimatedSection reducedMotion={reducedMotion}>
          <Anchor id="portfolio" />
          <SectionTitle title="Portfólio" subtitle="Soluções em produção e baseadas em casos reais de mercado." reducedMotion={reducedMotion} />
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[
              {
                title: "Neo Seguradora",
                desc: "Telemetria e dados para seguros automotivos com ingestão em alta escala e score de condução.",
                chips: ["Telemetria", "Insurtech", "Analytics"],
              },
              {
                title: "Agendô",
                desc: "Sistema para salões e barbearias: agenda, fidelidade, campanhas e pagamentos integrados.",
                chips: ["SaaS", "Pagamentos", "Marketing"],
              },
              {
                title: "RConnect (Tracker)",
                desc: "Rastreamento veicular em tempo real com app cliente e dashboards operacionais.",
                chips: ["IoT", "Tempo real", "Mobile"],
              },
              {
                title: "Multi Pagamentos",
                desc: "Sistemas integrados com diversos gateways e bancos.",
                chips: ["Gateway", "Checkout", "APIs"],
              },
              {
                title: "Corretai",
                desc: "Captação por diversas fontes de leads, integrado com automações de disparo, SMS/WPP/EMAIL.",
                chips: ["Automação", "CRM", "Leads"],
              },
              {
                title: "Soluções White Label",
                desc: "Produtos personalizáveis para revenda em múltiplos nichos com marca própria.",
                chips: ["White Label", "Multi-tenant", "B2B2C"],
              },
            ].map((p, index) => (
              <Grid key={p.title} item xs={12} md={4}>
                <PortfolioCard title={p.title} desc={p.desc} chips={p.chips} index={index} />
              </Grid>
            ))}
          </Grid>
        </AnimatedSection>
      </Container>

      <Divider />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <AnimatedSection reducedMotion={reducedMotion}>
          <Anchor id="services" />
          <SectionTitle title="Serviços" subtitle="Do zero ao lançamento e além." reducedMotion={reducedMotion} />
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} md={4} component={motion.div} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <Card
                variant="outlined"
                component={motion.div}
                sx={{ height: "100%", borderRadius: "4px" }}
                whileHover={{ y: -4, boxShadow: "0 16px 32px -10px rgba(124, 58, 237, 0.3)", transition: { duration: 0.05 } }}
              >
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center">
                  <BoltIcon fontSize="small" color="primary" />
                  <Typography variant="h6" fontWeight={700}>
                    MVP Ágil
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Lançamento rápido para validar a proposta de valor sem perder qualidade de interface.
                </Typography>
                <List dense sx={{ mt: 1 }} component={motion.ul} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  {[
                    "Até 20–30 dias de desenvolvimento (após análise)",
                    "Interface simples, moderna e funcional",
                    "Foco no essencial para validação",
                    "Valores a partir de R$ 2.000,00",
                  ].map((i, idx) => (
                    <ListItem key={i} disableGutters component={motion.li} variants={fadeInUp} custom={idx} sx={{ py: 0.25 }}>
                      <ListItemIcon sx={{ minWidth: 28 }}>
                        <CheckCircleIcon fontSize="small" color="secondary" />
                      </ListItemIcon>
                      <ListItemText primaryTypographyProps={{ variant: "body2" }} primary={i} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button
                fullWidth
                href={`${WHATSAPP.link}?text=${encodeURIComponent(WHATSAPP.messageMVP)}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                component={motion.a}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => reportConversion()}
              >
                Quero meu MVP
              </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={8} component={motion.div} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
            <Card
              variant="outlined"
              component={motion.div}
              sx={{ height: "100%", borderRadius: "4px" }}
              whileHover={{ y: -4, boxShadow: "0 16px 32px -10px rgba(124, 58, 237, 0.3)", transition: { duration: 0.05 } }}
            >
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center">
                  <SettingsIcon fontSize="small" color="primary" />
                  <Typography variant="h6" fontWeight={700}>
                    Desenvolvimento completo
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Projetos sob medida, arquitetura escalável, integrações e roadmap contínuo. Valores sob consulta.
                </Typography>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  <Grid item xs={12} md={6}>
                    <List dense component={motion.ul} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                      {[
                        { icon: <TimelineIcon fontSize="small" color="secondary" />, text: "Arquitetura modular (microserviços, filas, cache)" },
                        { icon: <GroupsIcon fontSize="small" color="secondary" />, text: "Multi-plataforma: web, mobile e APIs" },
                      ].map((item, idx) => (
                        <ListItem key={item.text} disableGutters component={motion.li} variants={fadeInUp} custom={idx} sx={{ py: 0.25 }}>
                          <ListItemIcon sx={{ minWidth: 28 }}>{item.icon}</ListItemIcon>
                          <ListItemText primary={item.text} primaryTypographyProps={{ variant: "body2" }} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <List dense component={motion.ul} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                      {[
                        { icon: <LeaderboardIcon fontSize="small" color="secondary" />, text: "Dados e analytics (ETL/ELT, BI)" },
                        { icon: <SecurityIcon fontSize="small" color="secondary" />, text: "Segurança e compliance (LGPD)" },
                      ].map((item, idx) => (
                        <ListItem key={item.text} disableGutters component={motion.li} variants={fadeInUp} custom={idx} sx={{ py: 0.25 }}>
                          <ListItemIcon sx={{ minWidth: 28 }}>{item.icon}</ListItemIcon>
                          <ListItemText primary={item.text} primaryTypographyProps={{ variant: "body2" }} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button
                  fullWidth
                  href={`${WHATSAPP.link}?text=${encodeURIComponent(WHATSAPP.messageProposta)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                  component={motion.a}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => reportConversion()}
                >
                  Solicitar proposta
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        </AnimatedSection>
      </Container>

      <Divider />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <AnimatedSection reducedMotion={reducedMotion}>
          <Anchor id="agile-mvp" />
          <SectionTitle
            title="MVP Ágil, sem enrolação"
            subtitle="Critérios de enquadramento e comparação com projetos completos."
            reducedMotion={reducedMotion}
          />
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12}>
            <Paper variant="outlined" sx={{ p: 3, height: "100%", borderRadius: "4px", width: "100%" }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle1" fontWeight={700}>
                  MVP x Projeto Completo
                </Typography>
                <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>
                  <Chip
                  icon={<BoltIcon fontSize="small" />}
                  size="small"
                  label="MVP Ágil"
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(37, 99, 235, 0.6)",
                    color: "#60A5FA",
                    "& .MuiChip-icon": { color: "#60A5FA" },
                  }}
                />
                <Chip icon={<SettingsIcon fontSize="small" />} size="small" label="Projeto Completo" variant="outlined" />
                </Stack>
              </Stack>

              <Box sx={{ display: { xs: "none", md: "block" }, mt: 2 }}>
                <Box
                  component="table"
                  sx={{
                    width: "100%",
                    borderCollapse: "separate",
                    borderSpacing: 0,
                    "& th, & td": { p: 1.25, borderBottom: "1px solid", borderColor: "divider" },
                    "& thead th": { bgcolor: "background.default", fontSize: 13, color: "text.secondary" },
                    "& tbody tr:nth-of-type(even)": { bgcolor: "action.hover" },
                    "& tbody td:first-of-type": { fontWeight: 600, width: "32%" },
                  }}
                >
                  <thead>
                    <tr>
                      <th>Aspecto</th>
                      <th>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ color: "primary.main" }}>
                          <BoltIcon fontSize="small" color="inherit" />
                          <Typography component="span" color="inherit" fontWeight={600}>
                            MVP Ágil
                          </Typography>
                        </Stack>
                      </th>
                      <th>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <SettingsIcon fontSize="small" /> Projeto Completo
                        </Stack>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {compareRows.map((row, idx) => (
                      <motion.tr
                        key={row.a}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                      >
                        <td>{row.a}</td>
                        <td>{row.b}</td>
                        <td>{row.c}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </Box>
              </Box>

              <Stack spacing={1.5} sx={{ display: { xs: "flex", md: "none" }, mt: 2 }}>
                {compareRows.map((row, idx) => (
                  <Paper
                    key={row.a}
                    component={motion.div}
                    variant="outlined"
                    sx={{ p: 1.5, borderRadius: "4px" }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <Typography variant="caption" color="text.secondary">
                      {row.a}
                    </Typography>
                    <Grid container spacing={1} sx={{ mt: 0.5 }}>
                      <Grid item xs={6}>
                        <Stack spacing={0.5}>
                          <Stack direction="row" spacing={0.5} alignItems="center">
                            <BoltIcon fontSize="inherit" />
                            <Typography variant="caption" color="text.secondary">
                              MVP
                            </Typography>
                          </Stack>
                          <Typography variant="body2">{row.b}</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={6}>
                        <Stack spacing={0.5}>
                          <Stack direction="row" spacing={0.5} alignItems="center">
                            <SettingsIcon fontSize="inherit" />
                            <Typography variant="caption" color="text.secondary">
                              Completo
                            </Typography>
                          </Stack>
                          <Typography variant="body2">{row.c}</Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Paper>
                ))}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
        </AnimatedSection>
      </Container>

      <Divider />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <AnimatedSection reducedMotion={reducedMotion}>
          <Anchor id="contact" />
          <Box
            component={motion.div}
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? false : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "stretch", md: "center" },
              gap: { xs: 2, md: 3 },
              p: 3,
              borderRadius: "4px",
              background: (theme) =>
                theme.palette.mode === "dark"
                  ? "linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(0, 179, 255, 0.08) 100%)"
                  : "linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(139, 92, 246, 0.06) 100%)",
              border: "1px solid",
              borderColor: (theme) =>
                theme.palette.mode === "dark" ? "rgba(139, 92, 246, 0.25)" : "rgba(124, 58, 237, 0.18)",
              boxShadow: (theme) =>
                theme.palette.mode === "dark"
                  ? "0 8px 32px -8px rgba(0,0,0,0.3)"
                  : "0 8px 32px -8px rgba(124, 58, 237, 0.12)",
            }}
          >
            <Box sx={{ flex: "1 1 auto", minWidth: 0 }}>
              <Typography sx={{ fontSize: { xs: 22, md: 26 }, fontWeight: 800, lineHeight: 1.2 }}>
                Vamos tirar sua ideia do papel?
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5 }}>
                Fale com a gente pelo WhatsApp e conte sobre o seu projeto. Resposta rápida.
              </Typography>
            </Box>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ xs: "stretch", sm: "center" }} sx={{ flexShrink: 0 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  height: 48,
                  px: 2.5,
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                  fontWeight: 600,
                  fontSize: 15,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 22, color: "secondary.main" }} />
                <Typography component="span" fontWeight={600} fontSize={15} fontVariantNumeric="tabular-nums">
                  {WHATSAPP.number}
                </Typography>
              </Box>
              <Button
                href={`${WHATSAPP.link}?text=${encodeURIComponent(WHATSAPP.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                component={motion.a}
                whileHover={{ scale: 1.02, boxShadow: "0 12px 40px -8px rgba(124, 58, 237, 0.5)", transition: { duration: 0.05 } }}
                whileTap={{ scale: 0.98 }}
                onClick={() => reportConversion()}
                sx={{ height: 48, px: 3, fontSize: 16, fontWeight: 700, borderRadius: "4px" }}
              >
                Falar no WhatsApp
              </Button>
            </Stack>
          </Box>
        </AnimatedSection>
      </Container>

      {!reducedMotion && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={showBackToTop ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.1 }}
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 9998,
          }}
        >
          <Button
            component={motion.button}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            variant="contained"
            size="small"
            sx={{
              minWidth: 48,
              height: 48,
              borderRadius: "50%",
              boxShadow: "0 8px 24px -4px rgba(124, 58, 237, 0.4)",
            }}
            whileHover={{ scale: 1.1, boxShadow: "0 12px 32px -4px rgba(124, 58, 237, 0.5)", transition: { duration: 0.05 } }}
            whileTap={{ scale: 0.95 }}
          >
            <KeyboardArrowUpIcon />
          </Button>
        </motion.div>
      )}

      <FooterWithReveal reducedMotion={reducedMotion} />
    </Box>
  );
}

function FooterWithReveal({ reducedMotion }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-50px", amount: 0.1 });
  const visible = reducedMotion ? true : inView;
  return (
    <Box
      ref={ref}
      component={motion.footer}
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      animate={
        reducedMotion
          ? { opacity: 1, y: 0 }
          : visible
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 16 }
      }
      transition={{ duration: 0.5, ease: "easeOut" }}
      sx={{ py: 4, borderTop: 1, borderColor: "divider" }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={{ xs: 1, md: 0 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Nullory - Todos os direitos reservados.
            </Typography>
            <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 0.5 }}>
              Harzy Software LTDA | CNPJ: 60.283.228/0001-68
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: "flex-start", md: "flex-end" }}
              sx={{ mt: { xs: 1, md: 0 } }}
            >
              {["Portfólio", "Serviços", "MVP", "Contato"].map((label, i) => (
                <Button
                  key={label}
                  href={i === 0 ? "#portfolio" : i === 1 ? "#services" : i === 2 ? "#agile-mvp" : "#contact"}
                  color="inherit"
                  size="small"
                  component={motion.a}
                  whileHover={{ y: -2, color: "#00B3FF" }}
                  whileTap={{ scale: 0.97 }}
                >
                  {label}
                </Button>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
