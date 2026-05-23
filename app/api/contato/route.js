import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { nome, email, telefone, assunto, mensagem } = await request.json();

    if (!nome || !email || !mensagem) {
      return Response.json(
        { error: 'Campos obrigatórios não preenchidos.' },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: 'Site BSB <contato@brasilsportsbusiness.com>',
      to: ['contato@brasilsportsbusiness.com'],
      replyTo: email,
      subject: `Nova mensagem pelo site BSB - ${assunto || 'Contato'}`,
      html: `
        <h2>Nova mensagem recebida pelo site da Brasil Sports Business</h2>
        <p><strong>Origem:</strong> Formulário oficial do site BSB</p>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
        <p><strong>Assunto:</strong> ${assunto || 'Não informado'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: 'Erro interno ao enviar mensagem.' },
      { status: 500 }
    );
  }
}