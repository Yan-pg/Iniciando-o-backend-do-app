# Recuperação de senha

**RF - REQUISITOS FUNCIONAIS**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve podre resetar sua senha;

**RNF - REQUISITOS NÃO FUNCIONAIS**

- Utilizar Mailtrap para testar envios de email em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecerr em segundo plano (background job);

**RN - REGRA DE NEGOCIO**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**RF - REQUISITOS FUNCIONAIS**

- O usuário deve poder atualizar seu nome, email e senha;

**RN - REGRA DE NEGOCIO**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**RF - REQUISITOS FUNCIONAIS**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação semmpre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF - REQUISITOS NÃO FUNCIONAIS**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificaçẽos do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN - REGRA DE NEGOCIO**

- A notificação deve ter um status de lida e não-lida para que o prestador posso controlar;

# Agendamento de serviços

**RF - REQUISITOS FUNCIONAIS**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve pode lista os dias de um mês com um pelo menos um horário disponível de um prestador;
- O  usuário deve pode listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um novo prerstador;

**RNF - REQUISITOS NÃO FUNCIONAIS**

- A listagem de prestadores deve ser armazenada em cache;

**RN - REGRA DE NEGOCIO**

- Cada agendamento deve duara 1h exatamente;
- Os agendamentos devem estar dusponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendae em horário á ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
