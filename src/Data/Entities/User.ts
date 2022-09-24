export interface User {
    id?: string;
    nomeCompleto: string;
    email: string;
    cpf: string;
    foto?: string;
    setor: string;
    setorId: string;
    cargo: string;
    permissoes?: [];
    criadoEm: Date;
    criadoPor: string;
    alteradoEm: Date;
    alteradoPor: string;
    ativo: boolean;
 }