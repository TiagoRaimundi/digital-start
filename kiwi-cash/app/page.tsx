'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [showCadastroModal, setShowCadastroModal] = useState(false)

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        color: 'white',
        padding: '1rem 0',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <nav style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 2rem'
        }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            🥝 Kiwi Cash
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link href="#como-funciona" style={{ color: 'white' }}>Como Funciona</Link>
            <Link href="#segmentos" style={{ color: 'white' }}>Segmentos</Link>
            <Link href="#precos" style={{ color: 'white' }}>Preços</Link>
            <Link href="/loja/dashboard" style={{
              background: 'white',
              color: '#10b981',
              padding: '0.7rem 1.5rem',
              borderRadius: '25px',
              fontWeight: 600
            }}>
              Entrar
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        color: 'white',
        padding: '8rem 2rem 4rem',
        textAlign: 'center',
        marginTop: '60px'
      }}>
        <div className="animate-fade-in-up">
          <h1 style={{
            fontSize: '3.5rem',
            marginBottom: '1rem',
            lineHeight: 1.2
          }}>
            🥝 Transforme Cada Compra em Fidelidade
          </h1>
          <p style={{
            fontSize: '1.5rem',
            marginBottom: '2rem',
            opacity: 0.95,
            maxWidth: '800px',
            margin: '0 auto 2rem'
          }}>
            Sistema universal de pontos e cashback para <strong>qualquer tipo de empresa</strong>
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowCadastroModal(true)}
              style={{
                background: 'white',
                color: '#10b981',
                padding: '1.2rem 2.5rem',
                borderRadius: '30px',
                fontWeight: 600,
                border: '2px solid white',
                fontSize: '1.1rem',
                cursor: 'pointer'
              }}
            >
              Cadastrar Minha Empresa
            </button>
            <Link href="/cliente" style={{
              background: 'transparent',
              color: 'white',
              padding: '1.2rem 2.5rem',
              borderRadius: '30px',
              fontWeight: 600,
              border: '2px solid white',
              fontSize: '1.1rem',
              display: 'inline-block'
            }}>
              Sou Cliente
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          maxWidth: '900px',
          margin: '4rem auto 0',
          padding: '2rem',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)'
        }}>
          {[
            { value: '500+', label: 'Empresas Cadastradas' },
            { value: '50k+', label: 'Clientes Ativos' },
            { value: 'R$ 2M+', label: 'Em Cashback' },
            { value: '98%', label: 'Satisfação' }
          ].map((stat, i) => (
            <div key={i}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                {stat.value}
              </div>
              <div style={{ opacity: 0.9 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Segmentos */}
      <section id="segmentos" style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '1rem',
            color: '#10b981'
          }}>
            Para Qualquer Tipo de Negócio
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: '#6b7280',
            marginBottom: '3rem'
          }}>
            O Kiwi Cash funciona para todos os segmentos
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { icon: '🍕', title: 'Restaurantes', desc: 'Pizzarias, lanchonetes, delivery' },
              { icon: '💇', title: 'Salões & Barbearias', desc: 'Serviços de beleza e estética' },
              { icon: '🏋️', title: 'Academias', desc: 'Studios, crossfit, pilates' },
              { icon: '🛒', title: 'Varejo', desc: 'Lojas de roupa, calçados, acessórios' },
              { icon: '🔧', title: 'Serviços', desc: 'Oficinas, assistências técnicas' },
              { icon: '📱', title: 'Telecoms', desc: 'Operadoras e provedores de internet' },
              { icon: '☕', title: 'Cafeterias', desc: 'Cafés, padarias, confeitarias' },
              { icon: '🏨', title: 'Hospedagem', desc: 'Hotéis, pousadas, hostels' },
              { icon: '🎓', title: 'Educação', desc: 'Cursos, escolas, treinamentos' },
              { icon: '🏥', title: 'Saúde', desc: 'Clínicas, consultórios, farmácias' },
              { icon: '🚗', title: 'Automotivo', desc: 'Postos, lavagens, estacionamentos' },
              { icon: '🎮', title: 'Entretenimento', desc: 'Cinemas, parques, eventos' }
            ].map((seg, i) => (
              <div key={i} style={{
                background: '#f9fafb',
                padding: '2rem',
                borderRadius: '15px',
                border: '2px solid #e5e7eb',
                textAlign: 'center',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.borderColor = '#10b981'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(16,185,129,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = '#e5e7eb'
                e.currentTarget.style.boxShadow = 'none'
              }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{seg.icon}</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#1f2937' }}>
                  {seg.title}
                </h3>
                <p style={{ color: '#6b7280' }}>{seg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" style={{ padding: '4rem 2rem', background: '#f8fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '3rem',
            color: '#10b981'
          }}>
            Como Funciona? É Simples!
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem'
          }}>
            {[
              {
                step: '1',
                title: 'Cadastre Sua Empresa',
                desc: 'Crie sua conta em 2 minutos. Grátis por 30 dias.',
                icon: '🏪'
              },
              {
                step: '2',
                title: 'Configure as Regras',
                desc: 'Defina quantos pontos por real gasto e os prêmios.',
                icon: '⚙️'
              },
              {
                step: '3',
                title: 'Registre Compras',
                desc: 'Digite CPF/telefone do cliente e o valor da compra.',
                icon: '💳'
              },
              {
                step: '4',
                title: 'Cliente Acumula',
                desc: 'Pontos são creditados automaticamente no sistema.',
                icon: '⭐'
              },
              {
                step: '5',
                title: 'Cliente Resgata',
                desc: 'Na próxima visita, usa os pontos para ganhar benefícios.',
                icon: '🎁'
              },
              {
                step: '6',
                title: 'Você Fideliza!',
                desc: 'Cliente volta sempre para não perder os pontos.',
                icon: '🔄'
              }
            ].map((item, i) => (
              <div key={i} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: 'white',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  boxShadow: '0 5px 15px rgba(16,185,129,0.3)'
                }}>
                  {item.step}
                </div>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginTop: '2rem', marginBottom: '1rem' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', textAlign: 'center', color: '#1f2937' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#6b7280', textAlign: 'center' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '3rem',
            color: '#10b981'
          }}>
            Por Que Usar Kiwi Cash?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { icon: '📈', title: 'Aumente o Retorno', desc: 'Clientes voltam 3x mais com programa de pontos' },
              { icon: '💰', title: 'Ticket Médio +40%', desc: 'Clientes gastam mais para acumular pontos' },
              { icon: '🎯', title: 'Reduza Churn em 65%', desc: 'Pontos acumulados prendem o cliente' },
              { icon: '📊', title: 'Dados Valiosos', desc: 'Conheça o comportamento dos seus clientes' },
              { icon: '⚡', title: 'Setup em 5min', desc: 'Sem complicação, sem instalação, sem código' },
              { icon: '📱', title: 'Multiplataforma', desc: 'Funciona em qualquer dispositivo' }
            ].map((item, i) => (
              <div key={i} style={{
                background: '#f9fafb',
                padding: '2rem',
                borderRadius: '15px',
                border: '2px solid #e5e7eb'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#1f2937' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#6b7280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preços */}
      <section id="precos" style={{ padding: '4rem 2rem', background: '#f8fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '1rem',
            color: '#10b981'
          }}>
            Planos Para Todos os Tamanhos
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: '#6b7280',
            marginBottom: '3rem'
          }}>
            30 dias grátis em qualquer plano. Cancele quando quiser.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              {
                name: 'Starter',
                price: 'R$ 49',
                features: ['Até 500 clientes', 'Pontos ilimitados', 'Dashboard básico', '1 loja', 'Suporte por email', 'QR Code'],
                color: '#10b981',
                popular: false
              },
              {
                name: 'Professional',
                price: 'R$ 99',
                features: ['Até 3.000 clientes', 'Pontos ilimitados', 'Dashboard avançado', 'Até 3 lojas', 'Campanhas automáticas', 'API REST', 'Suporte prioritário', 'Relatórios avançados'],
                color: '#10b981',
                popular: true
              },
              {
                name: 'Enterprise',
                price: 'R$ 249',
                features: ['Clientes ilimitados', 'Pontos ilimitados', 'Lojas ilimitadas', 'White Label', 'API dedicada', 'Gerente de conta', 'Suporte 24/7', 'Customizações'],
                color: '#059669',
                popular: false
              }
            ].map((plan, i) => (
              <div key={i} style={{
                background: plan.popular ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'white',
                color: plan.popular ? 'white' : '#333',
                padding: '2.5rem',
                borderRadius: '20px',
                boxShadow: plan.popular ? '0 10px 40px rgba(16,185,129,0.3)' : '0 5px 20px rgba(0,0,0,0.08)',
                border: plan.popular ? 'none' : '2px solid #e5e7eb',
                transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                position: 'relative'
              }}>
                {plan.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#f59e0b',
                    color: 'white',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}>
                    MAIS POPULAR
                  </div>
                )}
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>
                  {plan.name}
                </h3>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginBottom: '0.5rem'
                }}>
                  {plan.price}
                  <span style={{ fontSize: '1rem', opacity: 0.8 }}>/mês</span>
                </div>
                <p style={{
                  textAlign: 'center',
                  marginBottom: '2rem',
                  opacity: 0.9,
                  fontSize: '0.9rem'
                }}>
                  30 dias grátis
                </p>
                <ul style={{
                  listStyle: 'none',
                  marginBottom: '2rem'
                }}>
                  {plan.features.map((feature, j) => (
                    <li key={j} style={{
                      padding: '0.6rem 0',
                      paddingLeft: '1.8rem',
                      position: 'relative',
                      fontSize: '0.95rem'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        fontWeight: 'bold',
                        fontSize: '1.2rem'
                      }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowCadastroModal(true)}
                  style={{
                    width: '100%',
                    background: plan.popular ? 'white' : 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: plan.popular ? '#10b981' : 'white',
                    padding: '1rem',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '1rem'
                  }}
                >
                  Começar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Pronto Para Fidelizar Seus Clientes?
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95 }}>
          Junte-se a centenas de empresas que já usam o Kiwi Cash
        </p>
        <button
          onClick={() => setShowCadastroModal(true)}
          style={{
            background: 'white',
            color: '#10b981',
            padding: '1.2rem 3rem',
            borderRadius: '30px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '1.1rem'
          }}
        >
          Cadastro Grátis
        </button>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1f2937',
        color: 'white',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <p style={{ marginBottom: '1rem' }}>© 2024 Kiwi Cash. Todos os direitos reservados.</p>
        <p style={{ opacity: 0.8 }}>Transformando empresas em negócios mais rentáveis com fidelização inteligente.</p>
      </footer>

      {/* Modal Cadastro */}
      {showCadastroModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000
        }}>
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '20px',
            maxWidth: '500px',
            width: '90%',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
          }}>
            <h2 style={{ marginBottom: '1.5rem', color: '#10b981' }}>Cadastro da Empresa</h2>
            <input
              type="text"
              placeholder="Nome da Empresa"
              style={{
                width: '100%',
                padding: '0.8rem',
                marginBottom: '1rem',
                border: '2px solid #e5e7eb',
                borderRadius: '10px',
                fontSize: '1rem'
              }}
            />
            <input
              type="email"
              placeholder="E-mail"
              style={{
                width: '100%',
                padding: '0.8rem',
                marginBottom: '1rem',
                border: '2px solid #e5e7eb',
                borderRadius: '10px',
                fontSize: '1rem'
              }}
            />
            <input
              type="tel"
              placeholder="Telefone"
              style={{
                width: '100%',
                padding: '0.8rem',
                marginBottom: '2rem',
                border: '2px solid #e5e7eb',
                borderRadius: '10px',
                fontSize: '1rem'
              }}
            />
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => setShowCadastroModal(false)}
                style={{
                  flex: 1,
                  padding: '0.8rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '10px',
                  background: 'white',
                  color: '#1f2937',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                Cancelar
              </button>
              <button
                style={{
                  flex: 1,
                  padding: '0.8rem',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
