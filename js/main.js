    $(document).ready(function () {
            // Inicializa o carrossel
            $('#carousel-imagens').slick({
                autoplay: true,
                arrows: true,
                dots: true
            });

            // Adiciona máscaras aos campos
            $('#telefone').mask('(00) 00000-0000');
            $('#cpf').mask('000.000.000-00');
            $('#cep').mask('00000-000');

            // Validação do formulário
            $('#form').validate({
                rules: {
                    nome: {
                        required: true,
                        minlength: 3
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    telefone: {
                        required: true,
                        pattern: /^\(\d{2}\) \d{4,5}-\d{4}$/
                    },
                    cpf: {
                        required: true,
                        pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
                    },
                    endereco: {
                        required: true
                    },
                    cep: {
                        required: true,
                        pattern: /^\d{5}-\d{3}$/
                    }
                },
                messages: {
                    nome: {
                        required: "Por favor, insira seu nome completo",
                        minlength: "Seu nome deve ter no mínimo 3 caracteres"
                    },
                    email: {
                        required: "Por favor, insira seu e-mail",
                        email: "Por favor, insira um e-mail válido"
                    },
                    telefone: {
                        required: "Por favor, insira seu telefone",
                        pattern: "Por favor, insira um telefone válido no formato (99) 99999-9999"
                    },
                    cpf: {
                        required: "Por favor, insira seu CPF",
                        pattern: "Por favor, insira um CPF válido no formato 999.999.999-99"
                    },
                    endereco: {
                        required: "Por favor, insira seu endereço completo"
                    },
                    cep: {
                        required: "Por favor, insira seu CEP",
                        pattern: "Por favor, insira um CEP válido no formato 99999-999"
                    }
                }
            });
        });
