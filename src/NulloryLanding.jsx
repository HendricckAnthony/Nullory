import React from "react";
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
  ListItemText,
  TextField
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SettingsIcon from "@mui/icons-material/Settings";
import TimelineIcon from "@mui/icons-material/Timeline";
import SecurityIcon from "@mui/icons-material/Security";
import GroupsIcon from "@mui/icons-material/Groups";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import LinkIcon from "@mui/icons-material/Link";
import BoltIcon from "@mui/icons-material/Bolt";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logoWhite from "./public/logo-white.png";

const Anchor = ({ id }) => (
  <Box id={id} sx={{ position: "relative", top: -88, visibility: "hidden" }} />
);

const Bullet = ({ children }) => (
  <Stack direction="row" spacing={1} alignItems="center">
    <CheckCircleIcon fontSize="small" color="secondary" />
    <Typography variant="body2">{children}</Typography>
  </Stack>
);

const SectionTitle = ({ title, subtitle }) => (
  <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
    <Typography sx={{ fontSize: { xs: 26, md: 34 }, fontWeight: 800 }}>{title}</Typography>
    {subtitle && (
      <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
        {subtitle}
      </Typography>
    )}
  </Box>
);

function PortfolioCard({ title, desc, chips = [] }) {
  return (
    <Card variant="outlined" sx={{ height: "100%", borderRadius: "4px", transition: "all .2s", '&:hover': { boxShadow: 4, translate: "0 -2px" } }}>
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
  );
}

export default function NulloryLanding() {
  const compareRows = [
    { a: "Prazo", b: "Até 20-30 dias", c: "Sob cronograma (médio/longo)" },
    { a: "Escopo", b: "Essencial p/ validação", c: "Completo, integrações e escala" },
    { a: "Interface", b: "Simples e moderna", c: "Personalização avançada" },
    { a: "Preço", b: "A partir de R$ 2.000", c: "Sob consulta" },
  ];
  return (
    <Box>
      {/* NAVBAR */}
      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          bgcolor: "rgba(5, 7, 13, 0.85)",
          backdropFilter: "saturate(180%) blur(8px)",
        }}
      >
        <Toolbar>
          <Box component="a" href="#" sx={{ display: "flex", alignItems: "center", flexGrow: 1, textDecoration: "none" }}>
            <Box component="img" src={logoWhite} alt="Nullory" sx={{ height: 48 }} />
          </Box>
          <Stack direction="row" spacing={{ xs: 1, md: 2 }} sx={{ display: { xs: "none", md: "flex" } }}>
            <Button href="#portfolio" color="inherit">Portfólio</Button>
            <Button href="#servicos" color="inherit">Serviços</Button>
            <Button href="#mvp" color="inherit">MVP Ágil</Button>
            <Button href="#contato" variant="contained" endIcon={<ArrowForwardIcon />}>Fale com a gente</Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* HERO */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          background: "linear-gradient(180deg, rgba(17, 24, 39, 0.9) 0%, rgba(5, 7, 13, 1) 50%)",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "-50%",
            right: "-20%",
            width: "70%",
            height: "140%",
            background: "radial-gradient(ellipse at center, rgba(124, 58, 237, 0.1) 0%, rgba(0, 179, 255, 0.05) 50%, transparent 70%)",
            pointerEvents: "none",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-30%",
            left: "-20%",
            width: "60%",
            height: "100%",
            background: "radial-gradient(ellipse at center, rgba(0, 179, 255, 0.06) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 60%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip icon={<BoltIcon />} label="Entregas rápidas, sem enrolação" sx={{ mb: 2 }} color="secondary" variant="outlined" />
              <Typography sx={{ fontSize: { xs: 34, md: 48 }, lineHeight: 1.2, fontWeight: 900 }} gutterBottom>
                Software sob medida com foco em resultado
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: { xs: 16, md: 18 } }}>
                Tiramos sua ideia do papel em dias, não meses. MVP Ágil para validar rápido e
                desenvolvimento completo para escalar com segurança.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 3 }}>
                <Button href="#mvp" size="large" variant="contained" endIcon={<ArrowForwardIcon />}>Quero um MVP Ágil</Button>
                <Button href="#servicos" size="large" variant="outlined" endIcon={<ArrowForwardIcon />}>Projeto completo</Button>
              </Stack>
              <Grid container spacing={1.5} sx={{ mt: 2 }}>
                {["Prazo objetivo", "Arquitetura escalável", "UI moderna", "Suporte próximo"].map((t) => (
                  <Grid key={t} item xs={12} sm={6}>
                    <Bullet>{t}</Bullet>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                {[
                  { i: <StorefrontIcon fontSize="small" color="secondary" />, t: "Front-end", s: "React, Next.js, MUI" },
                  { i: <SettingsIcon fontSize="small" color="secondary" />, t: "Back-end", s: "Django, FastAPI, Node" },
                  { i: <LeaderboardIcon fontSize="small" color="secondary" />, t: "Dados", s: "PostgreSQL, ClickHouse, Redis" },
                  { i: <CloudDownloadIcon fontSize="small" color="secondary" />, t: "DevOps", s: "Docker, CI/CD, Cloud" },
                ].map(({ i, t, s }) => (
                  <Grid key={t} item xs={12} sm={6}>
                    <Paper variant="outlined" sx={{ p: 2.5, height: "100%", borderRadius: "4px" }}>
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
                <Grid item xs={12}>
                  <Paper variant="outlined" sx={{ p: 2.5, borderRadius: "4px" }}>
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

      {/* PORTFÓLIO */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Anchor id="portfolio" />
        <SectionTitle title="Portfólio" subtitle="Soluções em produção e baseadas em casos reais de mercado." />
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
          ].map((p) => (
            <Grid key={p.title} item xs={12} md={4}>
              <PortfolioCard title={p.title} desc={p.desc} chips={p.chips} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider />

      {/* SERVIÇOS */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Anchor id="servicos" />
        <SectionTitle title="Serviços" subtitle="Do zero ao lançamento e além." />
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} md={4}>
            <Card variant="outlined" sx={{ height: "100%", borderRadius: "4px" }}>
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
                <List dense sx={{ mt: 1 }}>
                  {[
                    "Até 20–30 dias de desenvolvimento (após análise)",
                    "Interface simples, moderna e funcional",
                    "Foco no essencial para validação",
                    "Valores a partir de R$ 2.000,00",
                  ].map((i) => (
                    <ListItem key={i} disableGutters>
                      <ListItemIcon sx={{ minWidth: 28 }}>
                        <CheckCircleIcon fontSize="small" color="secondary" />
                      </ListItemIcon>
                      <ListItemText primaryTypographyProps={{ variant: "body2" }} primary={i} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button fullWidth href="#mvp" variant="contained" endIcon={<ArrowForwardIcon />}>
                  Quero meu MVP
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Card variant="outlined" sx={{ height: "100%", borderRadius: "4px" }}>
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
                    <List dense>
                      <ListItem disableGutters>
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <TimelineIcon fontSize="small" color="secondary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Arquitetura modular (microserviços, filas, cache)"
                          primaryTypographyProps={{ variant: "body2" }}
                        />
                      </ListItem>
                      <ListItem disableGutters>
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <GroupsIcon fontSize="small" color="secondary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Multi-plataforma: web, mobile e APIs"
                          primaryTypographyProps={{ variant: "body2" }}
                        />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <List dense>
                      <ListItem disableGutters>
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <LeaderboardIcon fontSize="small" color="secondary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Dados e analytics (ETL/ELT, BI)"
                          primaryTypographyProps={{ variant: "body2" }}
                        />
                      </ListItem>
                      <ListItem disableGutters>
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <SecurityIcon fontSize="small" color="secondary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Segurança e compliance (LGPD)"
                          primaryTypographyProps={{ variant: "body2" }}
                        />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button fullWidth href="#contato" variant="outlined" endIcon={<ArrowForwardIcon />}>
                  Solicitar proposta
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {/* MVP DETALHE */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Anchor id="mvp" />
        <SectionTitle
          title="MVP Ágil, sem enrolação"
          subtitle="Critérios de enquadramento e comparação com projetos completos."
        />
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} md={8}>
            <Paper variant="outlined" sx={{ p: 3, height: "100%", borderRadius: "4px" }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle1" fontWeight={700}>
                  MVP x Projeto Completo
                </Typography>
                <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>
                  <Chip icon={<BoltIcon fontSize="small" />} size="small" label="MVP Ágil" color="primary" variant="outlined" />
                  <Chip icon={<SettingsIcon fontSize="small" />} size="small" label="Projeto Completo" variant="outlined" />
                </Stack>
              </Stack>

              {/* Tabela desktop */}
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
                    {compareRows.map((row) => (
                      <tr key={row.a}>
                        <td>{row.a}</td>
                        <td>{row.b}</td>
                        <td>{row.c}</td>
                      </tr>
                    ))}
                  </tbody>
                </Box>
              </Box>

              {/* Cartões mobile */}
              <Stack spacing={1.5} sx={{ display: { xs: "flex", md: "none" }, mt: 2 }}>
                {compareRows.map((row) => (
                  <Paper key={row.a} variant="outlined" sx={{ p: 1.5, borderRadius: "4px" }}>
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
      </Container>

      <Divider />

      {/* CONTATO */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Anchor id="contato" />
        <SectionTitle
          title="Vamos tirar sua ideia do papel?"
          subtitle="Conte rapidamente sobre o seu projeto e receba uma avaliação de enquadramento (MVP x Completo)."
        />
        <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 }, borderRadius: "4px" }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} md={5}>
              <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                Canais
              </Typography>
              <List>
                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <EmailIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="contato@nullory.software" secondary="E-mail" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <WhatsAppIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="+55 (00) 00000-0000" secondary="WhatsApp" />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <LinkIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="nullory.software" secondary="Site" />
                </ListItem>
              </List>
              <Typography variant="caption" color="text.secondary">
                *Após a análise, se o esforço estimado superar 30 dias, sugerimos a reclassificação para projeto
                completo.
              </Typography>
            </Grid>

            <Grid item xs={12} md={7}>
              <Grid container spacing={{ xs: 1.5, md: 2 }} component="form" onSubmit={(e) => e.preventDefault()}>
                <Grid item xs={12}>
                  <TextField fullWidth label="Nome" placeholder="Seu nome" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="E-mail" type="email" placeholder="voce@empresa.com" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="WhatsApp" placeholder="(xx) xxxxx-xxxx" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    minRows={4}
                    label="Resumo do projeto"
                    placeholder="Descreva objetivos, público e principais funcionalidades"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <Button type="submit" variant="contained" endIcon={<ArrowForwardIcon />}>
                      Enviar briefing
                    </Button>
                    <Button href="#mvp" variant="outlined">
                      Ver critérios MVP
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* FOOTER */}
      <Box component="footer" sx={{ py: 4, borderTop: 1, borderColor: "divider" }}>
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
                <Button href="#portfolio" color="inherit" size="small">
                  Portfólio
                </Button>
                <Button href="#servicos" color="inherit" size="small">
                  Serviços
                </Button>
                <Button href="#mvp" color="inherit" size="small">
                  MVP
                </Button>
                <Button href="#contato" color="inherit" size="small">
                  Contato
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
