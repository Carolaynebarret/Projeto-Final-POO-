package com.projeto.projetofinal.domain.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Getter
@Setter
@Entity
public class Curriculo {
	@EqualsAndHashCode.Include
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private Long id;
	
	@NotBlank
	@Size(max = 60)
	private String nome;
	
	@NotBlank
	@Email
	@Size(max = 255)
	private String email;
	
	@NotBlank
	@Size(max = 20)
	@Column(name = "fone")
	private String telefone;
	
	@NotBlank
	@Size(max = 10)
	private String sexo;
	
	
	@NotBlank
	@Size(max = 255)
	private String experiencia;
	
	@NotBlank
	@Size(max = 255)
    private String formacao;
	
	@NotBlank
	@Size(max = 255)
    private String cargo_desejado;
	
	@NotBlank
	@Size(max = 255)
    private String aptidoes;
	

	@NotBlank
	@Size(max = 255)
	private String objetivo;
	

	@NotBlank
	@Size(max = 255)
    private String especial;
	

	

}
