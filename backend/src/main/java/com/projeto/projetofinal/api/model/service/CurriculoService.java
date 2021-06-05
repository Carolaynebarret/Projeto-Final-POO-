package com.projeto.projetofinal.api.model.service;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.projeto.projetofinal.api.model.exception.NegocioException;
import com.projeto.projetofinal.api.repositorio.CurriculoRepositorio;
import com.projeto.projetofinal.domain.model.Curriculo;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class CurriculoService {
	
	
private CurriculoRepositorio curriculoRepository;	
	
	
	
	@Transactional
	public Curriculo salvar(Curriculo cliente) {
		boolean emailEmUso = curriculoRepository.findByEmail(cliente.getEmail()).stream()
				.anyMatch(clienteExistente -> !clienteExistente.equals(cliente));
		
		if(emailEmUso ) {
			throw new NegocioException("Já existe um cliente cadastrado com este e-mail.");
		}
		
		return curriculoRepository.save(cliente);
		
	}
	

}
