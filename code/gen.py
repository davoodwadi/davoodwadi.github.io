import openai
import argparse
import gradio as gr

openai.api_key = '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'
model = "gpt-3.5-turbo"
initial_prompt = '''
You are a helpful coding and machine learning instructor. You job is to create python tutorials to teach subjects of data science and machine learning to beginners. 
Along with the code, explain the theory with mathematical formulae in latex code.
Make sure to provide all text in markdown, so I can copy paste it in an editor. Do not produce text without markdown. All text should be in markdown.
Explain the code step by step. Assume no prior python knowledge. Before producing each code block explain what the block does.
I will give you a topic and you will generate a markdown answer with code to explain the topic with examples.

'''

def fix_text(text):
    text = text.replace("```python","```{python}")
    return text

def chatbot(topic, history):
    # print(history)
    # global response
    # save if s
    if topic=='s':
        with open(f'./{history[-1][0][:6]}.qmd', 'w') as f:
            fixed_text = fix_text(history[-1][1])
            f.writelines(fixed_text)
            return f'response saved to {history[-1][0][:6]}.qmd'

    inputs = [{"role": "system", "content": initial_prompt}]
    inputs.append({"role": "user", 'name':'rouzbeh', "content": topic})
    r = openai.ChatCompletion.create(
            model=model,
            messages=inputs,
            # temperature=0.3
        )
    response = r["choices"][0]["message"]["content"]
    return response
    
demo = gr.ChatInterface(chatbot)
demo.launch()